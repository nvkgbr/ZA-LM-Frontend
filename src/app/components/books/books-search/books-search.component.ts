import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
	selector: 'lm-books-search',
	templateUrl: './books-search.component.html',
	styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnInit {
	@Output()
	public readonly bookInputChanged: EventEmitter<string> = new EventEmitter<string>();

	private _bookSearchInput = new UntypedFormControl('');

	public get bookSearchInput() {
		return this._bookSearchInput;
	}

	constructor() {}

	public ngOnInit(): void {
		this.bookSearchInput.valueChanges.subscribe((value) => {
			this.bookInputChanged.emit(value);
		});
	}
}
