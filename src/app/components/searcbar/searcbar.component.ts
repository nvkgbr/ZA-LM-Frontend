import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
	selector: 'lm-searcbar',
	templateUrl: './searcbar.component.html',
	styleUrls: ['./searcbar.component.scss']
})
export class SearcbarComponent implements OnInit {
	@Output()
	public readonly inputChanged: EventEmitter<string> = new EventEmitter<string>();

	private _searchInput = new UntypedFormControl('');

	public get searchInput() {
		return this._searchInput;
	}

	constructor() {}

	ngOnInit(): void {
		this.searchInput.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
			this.inputChanged.emit(value);
		});
	}
}
