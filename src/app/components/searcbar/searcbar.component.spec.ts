import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcbarComponent } from './searcbar.component';

describe('SearcbarComponent', () => {
	let component: SearcbarComponent;
	let fixture: ComponentFixture<SearcbarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SearcbarComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(SearcbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
