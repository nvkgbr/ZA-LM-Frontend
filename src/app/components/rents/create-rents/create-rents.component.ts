import { Component, OnInit } from '@angular/core';
import { BookHttpService } from '../../../services/book-http/book-http.service';
import { RenterHttpService } from '../../../services/renters-http/renters-http.service';
import { Book } from '../../../model/book.model';
import { Renter } from 'src/app/model/renter.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'lm-create-rents',
	templateUrl: './create-rents.component.html',
	styleUrls: ['./create-rents.component.scss']
})
export class CreateRentsComponent implements OnInit {
	public bookList!: Book[];
	public renterList!: Renter[];
	public rentsForm = this.fb.group({
		renter: ['', Validators.required],
		book: ['', Validators.required],
		expired: ['', Validators.required]
	});

	constructor(private bookService: BookHttpService, private renterService: RenterHttpService, private readonly fb: FormBuilder) {}

	ngOnInit(): void {
		this.bookService.getAllBooks().subscribe((books) => (this.bookList = books));
		this.renterService.getAllRenter().subscribe((renters) => (this.renterList = renters));
	}
	public test() {
		console.log(this.rentsForm.value);
	}
}
