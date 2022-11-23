import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
	selector: 'lm-rents-search',
	templateUrl: './rents-search.component.html',
	styleUrls: ['./rents-search.component.scss']
})
export class RentsSearchComponent implements OnInit {
	@Output()
	public readonly rentsInputChanged: EventEmitter<string> = new EventEmitter<string>();

	private _rentsSearchInput = new UntypedFormControl('');

	public get rentsSearchInput() {
		return this._rentsSearchInput;
	}

	constructor() {}

	public ngOnInit(): void {
		this.rentsSearchInput.valueChanges.subscribe((value) => {
			this.rentsInputChanged.emit(value);
		});
	}
}
