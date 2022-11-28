import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { nameRegex } from 'src/lib/validators/validator.properties';

@Component({
	selector: 'lm-update-renter',
	templateUrl: './update-renter.component.html',
	styleUrls: ['./update-renter.component.scss']
})
export class UpdateRenterComponent implements OnInit {
	constructor(private readonly fb: FormBuilder) {}

	public renterForm = this.fb.group({
		name: ['', [Validators.required, Validators.pattern(nameRegex)]],
		birth: ['', Validators.required],
		email: ['', [Validators.required, Validators.email]]
	});

	public get name(): AbstractControl<any, any> | null {
		return this.renterForm.get('name');
	}

	public get birth(): AbstractControl<any, any> | null {
		return this.renterForm.get('birth');
	}

	public get email(): AbstractControl<any, any> | null {
		return this.renterForm.get('email');
	}

	ngOnInit(): void {}
}
