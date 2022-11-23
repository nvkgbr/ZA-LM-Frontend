import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
	selector: 'lm-renter-search',
	templateUrl: './renter-search.component.html',
	styleUrls: ['./renter-search.component.scss']
})
export class RenterSearchComponent implements OnInit {
	@Output()
	public readonly renterInputChanged: EventEmitter<string> = new EventEmitter<string>();

	private _renterSearchInput = new UntypedFormControl('');

	public get renterSearchInput() {
		return this._renterSearchInput;
	}

	constructor() {}

	public ngOnInit(): void {
		this.renterSearchInput.valueChanges.subscribe((value) => {
			this.renterInputChanged.emit(value);
		});
	}
}
