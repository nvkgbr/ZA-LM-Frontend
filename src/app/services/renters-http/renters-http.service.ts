import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Renter } from 'src/app/model/renter.model';

@Injectable({
	providedIn: 'root'
})
export class RenterHttpService {
	private RENTER_API_URL: string = 'http://localhost:5501/api/renters/';

	constructor(private http: HttpClient) {}

	public getAllRenter(): Observable<Renter[]> {
		return this.http.get<Renter[]>(this.RENTER_API_URL);
	}
}
