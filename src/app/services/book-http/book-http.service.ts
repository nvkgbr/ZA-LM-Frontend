import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, UpdateBook } from 'src/app/model/book.model';
import { PostBook } from '../../model/book.model';

@Injectable({
	providedIn: 'root'
})
export class BookHttpService {
	private BOOKS_API_URL: string = 'http://localhost:5501/api/books/';

	constructor(private http: HttpClient) {}

	public getAllBooks(): Observable<Book[]> {
		return this.http.get<Book[]>(this.BOOKS_API_URL);
	}

	public deleteBook(id: string): Observable<any> {
		const url = `${this.BOOKS_API_URL}${id}`;
		return this.http.delete<any>(url);
	}

	public createBook(book: PostBook): Observable<PostBook> {
		const url = `${this.BOOKS_API_URL}`;
		return this.http.post<PostBook>(url, book);
	}

	public updateBook(id: string, book: UpdateBook): Observable<any> {
		const url = `${this.BOOKS_API_URL}${id}`;
		console.log(url);

		return this.http.put(url, book);
	}
}
