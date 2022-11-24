import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'lm-create-renter',
	templateUrl: './create-renter.component.html',
	styleUrls: ['./create-renter.component.scss']
})
export class CreateRenterComponent implements OnInit {
	public renterForm = this.fb.group({
		name: [''],
		birth: [''],
		email: ['']
	});

	constructor(private readonly fb: FormBuilder) {}

	ngOnInit(): void {}
}
