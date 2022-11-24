import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Renter } from 'src/app/model/renter.model';
import { RenterHttpService } from 'src/app/services/renters-http/renters-http.service';
import { CreateRenterComponent } from './create-renter/create-renter.component';
import { PostRenter } from '../../model/renter.model';
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

	constructor(private renterHttpService: RenterHttpService, private modal: NzModalService) {}

	public ngOnInit(): void {
		this.refreshRenter();
	}

	private refreshRenter(): void {
		this.renterHttpService.getAllRenter().subscribe((renter) => {
			this.renterList = [...renter];
			this.filteredRenterList = [...renter];
			console.log(this.renterList);
		});
	}

	public handleSearchChange(input: string): void {
		if (input.length >= 3) {
			setTimeout(() => {
				this.filteredRenterList = this.renterList.filter((renter: Renter) => {
					return renter?.name.toLocaleLowerCase().includes(input.toLocaleLowerCase());
				});
			}, 1000);
		} else {
			this.filteredRenterList = this.renterList;
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
		const ref: NzModalRef = this.modal.confirm({
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
	}
}
