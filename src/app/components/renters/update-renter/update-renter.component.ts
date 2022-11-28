import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'lm-update-renter',
  templateUrl: './update-renter.component.html',
  styleUrls: ['./update-renter.component.scss']
})
export class UpdateRenterComponent implements OnInit {

	constructor(private readonly fb: FormBuilder) {}

	public renterForm = this.fb.group({
		name: [''],
		birth: [''],
		email: ['']
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
