import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rents } from 'src/app/model/rents.model';
import { PostRent } from '../../model/rents.model';

@Injectable({
	providedIn: 'root'
})
export class RentsHttpService {
	private RENTS_API_URL: string = 'http://localhost:5501/api/rents/';

	constructor(private http: HttpClient) {}

	public getAllRents(): Observable<Rents[]> {
		return this.http.get<Rents[]>(this.RENTS_API_URL);
	}

	public deleteRent(id: string): Observable<any> {
		const url = `${this.RENTS_API_URL}${id}`;
		return this.http.delete<any>(url);
	}
	public createRent(rent: PostRent): Observable<PostRent> {
		const url = `${this.RENTS_API_URL}`;
		return this.http.post<PostRent>(url, rent);
	}
}
