import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'lm-update-rents',
  templateUrl: './update-rents.component.html',
  styleUrls: ['./update-rents.component.scss']
})
export class UpdateRentsComponent implements OnInit {

  constructor(private readonly fb: FormBuilder) { }

  public rentsForm = this.fb.group({
    status: [''],
		expired: ['']
  });


  public get status(): AbstractControl<any, any> | null {
    return this.rentsForm.get('status');
  }


  public get expired(): AbstractControl<any, any> | null {
    return this.rentsForm.get('expired');
  }

  ngOnInit(): void { }

}
