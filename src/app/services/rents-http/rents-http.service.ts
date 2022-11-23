import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rents } from 'src/app/model/rents.model';

@Injectable({
	providedIn: 'root'
})
export class RentsHttpService {
	private RENTS_API_URL: string = 'http://localhost:5501/api/rents/';

	constructor(private http: HttpClient) {}

	public getAllRents(): Observable<Rents[]> {
		return this.http.get<Rents[]>(this.RENTS_API_URL);
	}
}
