import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { titleRegex, isbnRegex, authorRegex } from '../../../../lib/validators/validator.properties';

@Component({
	selector: 'app-update-books',
	templateUrl: './update-books.component.html',
	styleUrls: ['./update-books.component.scss']
})
export class UpdateBooksComponent implements OnInit {
	constructor(private readonly fb: FormBuilder) {}

	public bookForm = this.fb.group({
		title: ['', [Validators.required, Validators.pattern(titleRegex)]],
		author: ['', [Validators.required, Validators.pattern(authorRegex)]],
		ISBN: ['', [Validators.required, Validators.pattern(isbnRegex)]]
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

	public get TitleIsValid(): boolean {
		if (this.title?.errors) return this.title.errors['pattern'];
		return false;
	}

	public get AuthorIsValid(): boolean {
		if (this.author?.errors) return this.author.errors['pattern'];
		return false;
	}

	public get ISBNIsValid(): boolean {
		if (this.ISBN?.errors) return this.ISBN.errors['pattern'];
		return false;
	}

	ngOnInit(): void {}
}
