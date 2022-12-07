import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { authorRegex, isbnRegex, titleRegex } from 'src/lib/validators/validator.properties';

@Component({
	selector: 'lm-create-books',
	templateUrl: './create-books.component.html',
	styleUrls: ['./create-books.component.scss']
})
export class CreateBooksComponent implements OnInit {
	public bookForm = this.fb.group({
		title: ['', [Validators.required, Validators.pattern(titleRegex)]],
		author: ['', [Validators.required, Validators.pattern(authorRegex)]],
		ISBN: ['', [Validators.required, Validators.pattern(isbnRegex)]]
	});

	constructor(private readonly fb: FormBuilder) {}

	ngOnInit(): void {}
}
