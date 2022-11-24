import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'lm-create-books',
	templateUrl: './create-books.component.html',
	styleUrls: ['./create-books.component.scss']
})
export class CreateBooksComponent implements OnInit {
	public bookForm = this.fb.group({
		title: [''],
		author: [''],
		ISBN: ['']
	});

	constructor(private readonly fb: FormBuilder) {}

	ngOnInit(): void {}
}
