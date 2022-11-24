import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Rents } from 'src/app/model/rents.model';
import { RentsHttpService } from 'src/app/services/rents-http/rents-http.service';

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

	constructor(private rentsHttpService: RentsHttpService, private modal: NzModalService) {}

	public ngOnInit(): void {
		this.refreshRents();
	}

	private refreshRents(): void {
		this.rentsHttpService.getAllRents().subscribe((rents) => {
			this.rentsList = [...rents];
			this.filteredRentsList = [...rents];
			console.log(this.rentsList);
		});
	}

	public handleSearchChange(input: string): void {
		if (input.length >= 3) {
			setTimeout(() => {
				this.filteredRentsList = this.rentsList.filter((rents: Rents) => {
					return rents?.renter?.name.toLocaleLowerCase().includes(input.toLocaleLowerCase());
				});
			}, 1000);
		} else {
			this.filteredRentsList = this.rentsList;
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
}
