import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRenterComponent } from './create-renter.component';

describe('CreateRenterComponent', () => {
  let component: CreateRenterComponent;
  let fixture: ComponentFixture<CreateRenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
