import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from '../../model/log.model';

@Injectable({
	providedIn: 'root'
})
export class LogHttpService {
	private LOG_API_URL: string = 'https://gabor-novak-fa.azurewebsites.net/api/GetLogs?code=FjWuYAgEDxH2Aze5CCBXTdPqUXPPpn7xJnmbRGBK9ipoAzFuTYFqQw==';

	constructor(private http: HttpClient) {}

	public getAllLog(): Observable<Log[]> {
		return this.http.get<Log[]>(this.LOG_API_URL);
	}
}
