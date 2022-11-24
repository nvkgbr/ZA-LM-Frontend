import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRentsComponent } from './create-rents.component';

describe('CreateRentsComponent', () => {
  let component: CreateRentsComponent;
  let fixture: ComponentFixture<CreateRentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
