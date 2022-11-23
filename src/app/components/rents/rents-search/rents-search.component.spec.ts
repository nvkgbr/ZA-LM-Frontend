import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentsSearchComponent } from './rents-search.component';

describe('RentsSearchComponent', () => {
	let component: RentsSearchComponent;
	let fixture: ComponentFixture<RentsSearchComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RentsSearchComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(RentsSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
