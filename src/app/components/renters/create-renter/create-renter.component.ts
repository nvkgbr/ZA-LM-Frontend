import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { nameRegex } from 'src/lib/validators/validator.properties';

@Component({
	selector: 'lm-create-renter',
	templateUrl: './create-renter.component.html',
	styleUrls: ['./create-renter.component.scss']
})
export class CreateRenterComponent implements OnInit {
	public renterForm = this.fb.group({
		name: ['', [Validators.required, Validators.pattern(nameRegex)]],
		birth: ['', Validators.required],
		email: ['', [Validators.required, Validators.email]]
	});

	constructor(private readonly fb: FormBuilder) { }

	ngOnInit(): void { }
}
