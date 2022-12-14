import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Book } from 'src/app/model/book.model';
import { Renter } from 'src/app/model/renter.model';
import { Rents, UpdateRent } from 'src/app/model/rents.model';
import { LoadService } from 'src/app/services/load.service';
import { RentsHttpService } from 'src/app/services/rents-http/rents-http.service';
import { PostRent } from '../../model/rents.model';
import { CreateRentsComponent } from './create-rents/create-rents.component';
import { UpdateRentsComponent } from './update-rents/update-rents.component';

@Component({
	selector: 'lm-rents',
	templateUrl: './rents.component.html',
	styleUrls: ['./rents.component.scss']
})
export class RentsComponent implements OnInit {
	private _rentsList: Array<Rents> = [];
	private _filteredRentsList: Array<Rents> = [];

	public get filteredRentsList(): Array<Rents> {
		return this._filteredRentsList;
	}

	public set filteredRentsList(value: Array<Rents>) {
		this._filteredRentsList = value;
	}

	public get rentsList(): Array<Rents> {
		return this._rentsList;
	}

	public set rentsList(value: Array<Rents>) {
		this._rentsList = value;
	}

	public listOfColumn = [
		{
			title: 'Title',
			compare: (a: Rents, b: Rents) => a.book.title.localeCompare(b.book.title),
			priority: false
		},
		{
			title: 'Renter name',
			compare: (a: Rents, b: Rents) => a.renter.name.localeCompare(b.renter.name),
			priority: 2
		},
		{
			title: 'Status',
			compare: (a: Rents, b: Rents) => a.status.localeCompare(b.status),
			priority: 1
		}
	];

	constructor(private rentsHttpService: RentsHttpService, private modal: NzModalService, private loadService: LoadService) {
		this.loadService.show();
	}

	public ngOnInit(): void {
		this.refreshRents();
	}

	private refreshRents(): void {
		this.loadService.show();
		setTimeout(() => {
			this.rentsHttpService.getAllRents().subscribe((rents) => {
				this.rentsList = [...rents];
				this.filteredRentsList = [...rents];
				this.loadService.hide();
				console.log(this.rentsList);
			});

		}, 1000);
	};

	public handleSearchChange(input: string): void {
		this.loadService.show();
		if (input.length >= 3) {
			setTimeout(() => {
				this.loadService.hide();
				this.filteredRentsList = this.rentsList.filter((rents: Rents) => {
					return rents?.renter?.name.toLocaleLowerCase().includes(input.toLocaleLowerCase());
				});
			}, 1000);
		} else {
			this.filteredRentsList = this.rentsList;
			this.loadService.hide();

		}
	}

	public deleteClick(rent: Rents) {
		this.modal.confirm({
			nzTitle: 'You sure you want to delete this rent?',
			nzContent: `<b style="color: red;">Rented by: ${rent.renter.name}<br>Title: ${rent.book.title}<br>State: ${rent.status}</b>`,
			nzOkText: 'Yes',
			nzOkType: 'primary',
			nzOkDanger: true,
			nzOnOk: () => this.deleteRent(rent),
			nzCancelText: 'No',
			nzOnCancel: () => console.log('Cancel')
		});
	}

	public deleteRent(rent: Rents) {
		this.rentsHttpService.deleteRent(rent.id).subscribe((response) => {
			console.log(response);
			this.refreshRents();
		});
	}

	public createClick() {
		const ref: NzModalRef = this.modal.info({
			nzTitle: 'Create new rent!',
			nzContent: CreateRentsComponent,
			nzOkText: 'Yes',
			nzOkType: 'primary',
			nzOkDanger: true,
			nzOnOk: () => this.createRent(ref.componentInstance.rentsForm.value),
			nzCancelText: 'No',
			nzOnCancel: () => console.log('Cancel')
		});
	}

	public createRent(rents: PostRent) {
		this.rentsHttpService.createRent(rents).subscribe(() => {
			this.refreshRents();
		});
		console.log(rents);
	};

	public updateClick(rent: Rents) {
		const ref: NzModalRef = this.modal.info({
			nzTitle: 'Update rent!',
			nzContent: UpdateRentsComponent,
			nzOkText: 'Yes',
			nzOkType: 'primary',
			nzOkDanger: true,
			nzOnOk: () => this.updateRent(rent.id, ref.componentInstance.rentsForm.value),
			nzCancelText: 'No',
			nzOnCancel: () => console.log(ref.componentInstance.rentsForm.value)
		});

		ref.componentInstance.status.setValue(rent.status);
		ref.componentInstance.expired.setValue(rent.expired);
	}

	private updateRent(id: string, rent: UpdateRent) {
		console.log(`${id} t??bbi: ${JSON.stringify(rent)}`);
		this.rentsHttpService.updateRenter(id, rent).subscribe(() => {
			this.refreshRents();
		});
	}
}
