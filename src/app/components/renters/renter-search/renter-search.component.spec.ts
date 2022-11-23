import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RenterSearchComponent } from './renter-search.component';

describe('RenterSearchComponent', () => {
	let component: RenterSearchComponent;
	let fixture: ComponentFixture<RenterSearchComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RenterSearchComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(RenterSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
