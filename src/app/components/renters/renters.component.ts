import { Component, OnInit } from '@angular/core';
import { Renter } from 'src/app/model/renter.model';
import { RenterHttpService } from 'src/app/services/renters-http/renters-http.service';
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

	constructor(private renterHttpService: RenterHttpService) {}

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
}
