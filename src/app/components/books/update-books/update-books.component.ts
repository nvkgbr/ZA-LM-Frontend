import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-update-books',
	templateUrl: './update-books.component.html',
	styleUrls: ['./update-books.component.scss']
})
export class UpdateBooksComponent implements OnInit {
	constructor(private readonly fb: FormBuilder) {}

	public bookForm = this.fb.group({
		title: [''],
		author: [''],
		ISBN: ['']
	});

	public get title(): AbstractControl<any, any> | null {
		return this.bookForm.get('title');
	}

	public get author(): AbstractControl<any, any> | null {
		return this.bookForm.get('author');
	}

	public get ISBN(): AbstractControl<any, any> | null {
		return this.bookForm.get('ISBN');
	}

	ngOnInit(): void {}
}
