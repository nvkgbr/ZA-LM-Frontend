import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Renter } from 'src/app/model/renter.model';
import { PostRenter } from '../../model/renter.model';

@Injectable({
	providedIn: 'root'
})
export class RenterHttpService {
	private RENTER_API_URL: string = 'http://localhost:5501/api/renters/';

	constructor(private http: HttpClient) {}

	public getAllRenter(): Observable<Renter[]> {
		return this.http.get<Renter[]>(this.RENTER_API_URL);
	}

	public deleteRenter(id: string): Observable<any> {
		const url = `${this.RENTER_API_URL}${id}`;
		return this.http.delete<any>(url);
	}
	public createRenter(renter: PostRenter): Observable<PostRenter> {
		const url = `${this.RENTER_API_URL}`;
		return this.http.post<PostRenter>(url, renter);
	}
}
