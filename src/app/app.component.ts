import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadService } from './services/load.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public isLoad$!: Observable<boolean>;

	constructor(private service: LoadService) {
		this.isLoad$ = this.service.isLoadMaskVisibile
	  }
	
}
