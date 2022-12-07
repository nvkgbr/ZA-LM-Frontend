import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Renter, UpdateRenter } from 'src/app/model/renter.model';
import { RenterHttpService } from 'src/app/services/renters-http/renters-http.service';
import { CreateRenterComponent } from './create-renter/create-renter.component';
import { PostRenter } from '../../model/renter.model';
import { UpdateRenterComponent } from './update-renter/update-renter.component';
import { LoadService } from 'src/app/services/load.service';
@Component({
	selector: 'lm-renters',
	templateUrl: './renters.component.html',
	styleUrls: ['./renters.component.scss']
})
export class RentersComponent implements OnInit {
	private _renterList: Array<Renter> = [];
	private _filteredRenterList: Array<Renter> = [];

	public get filteredRenterList(): Array<Renter> {
		return this._filteredRenterList;
	}

	public set filteredRenterList(value: Array<Renter>) {
		this._filteredRenterList = value;
	}

	public get renterList(): Array<Renter> {
		return this._renterList;
	}

	public set renterList(value: Array<Renter>) {
		this._renterList = value;
	}

	public listOfColumn = [
		{
			title: 'Name',
			compare: (a: Renter, b: Renter) => a.name.localeCompare(b.name),
			priority: false
		},
		{
			title: 'Birth',
			compare: (a: Renter, b: Renter) => a.birth.toLocaleString().localeCompare(b.birth.toLocaleString()),
			priority: 2
		},
		{
			title: 'Email',
			compare: (a: Renter, b: Renter) => a.email.localeCompare(b.email),
			priority: 1
		}
	];



	constructor(private renterHttpService: RenterHttpService, private modal: NzModalService, private loadService: LoadService) {
		this.loadService.show();

	}

	public ngOnInit(): void {
		this.refreshRenter();
	}

	private refreshRenter(): void {
		this.loadService.show();
		setTimeout(() => {
			this.renterHttpService.getAllRenter().subscribe((renter) => {
				this.renterList = [...renter];
				this.filteredRenterList = [...renter];
				this.loadService.hide();
				console.log(this.renterList);
			});
		}, 1000);

	}

	public handleSearchChange(input: string): void {
		this.loadService.show();
		if (input.length >= 3) {
			setTimeout(() => {
				this.loadService.hide();
				this.filteredRenterList = this.renterList.filter((renter: Renter) => {
					return renter?.name.toLocaleLowerCase().includes(input.toLocaleLowerCase());
				});
			}, 1000);
		} else {
			this.filteredRenterList = this.renterList;
			this.loadService.hide();

		}
	}

	public deleteClick(renter: Renter) {
		this.modal.confirm({
			nzTitle: 'You sure you want to delete this renter?',
			nzContent: `<b style="color: red;">Renter: ${renter.name}<br>Birth: ${renter.birth}<br>Email: ${renter.email}</b>`,
			nzOkText: 'Yes',
			nzOkType: 'primary',
			nzOkDanger: true,
			nzOnOk: () => this.deleteRenter(renter),
			nzCancelText: 'No',
			nzOnCancel: () => console.log('Cancel')
		});
	}

	public deleteRenter(renter: Renter) {
		this.renterHttpService.deleteRenter(renter.id).subscribe((response) => {
			console.log(response);
			this.refreshRenter();
		});
	}

	public createClick() {
		const ref: NzModalRef = this.modal.info({
			nzTitle: 'Create new rent!',
			nzContent: CreateRenterComponent,
			nzOkText: 'Yes',
			nzOkType: 'primary',
			nzOkDanger: true,
			nzOnOk: () => this.createRenter(ref.componentInstance.renterForm.value),
			nzCancelText: 'No',
			nzOnCancel: () => console.log('Cancel')
		});
	}

	public createRenter(renter: PostRenter) {
		this.renterHttpService.createRenter(renter).subscribe(() => {
			this.refreshRenter();
		});
		console.log(renter);
	};

	public updateClick(renter: Renter) {
		const ref: NzModalRef = this.modal.info({
			nzTitle: 'Update renter!',
			nzContent: UpdateRenterComponent,
			nzOkText: 'Yes',
			nzOkType: 'primary',
			nzOkDanger: true,
			nzOnOk: () => this.updateRenter(renter.id, ref.componentInstance.renterForm.value),
			nzCancelText: 'No',
			nzOnCancel: () => console.log(ref.componentInstance.renterForm.value)
		});

		ref.componentInstance.name.setValue(renter.name);
		ref.componentInstance.birth.setValue(renter.birth);
		ref.componentInstance.email.setValue(renter.email);
	}

	private updateRenter(id: string, renter: UpdateRenter) {
		console.log(`${id} többi: ${JSON.stringify(renter)}`);
		this.renterHttpService.updateRenter(id, renter).subscribe(() => {
			this.refreshRenter();
		});
	}

}
