import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { Book } from 'src/app/model/book.model';
import { BookHttpService } from 'src/app/services/book-http.service';

@Component({
	selector: 'lm-books',
	templateUrl: './books.component.html',
	styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
	private _bookList: Array<Book> = [];
	private _filteredBookList: Array<Book> = [];

	public get filteredBookList(): Array<Book> {
		return this._filteredBookList;
	}

	public set filteredBookList(value: Array<Book>) {
		this._filteredBookList = value;
	}

	public get bookList(): Array<Book> {
		return this._bookList;
	}

	public set bookList(value: Array<Book>) {
		this._bookList = value;
	}

	constructor(private bookHttpService: BookHttpService) {}

	public ngOnInit(): void {
		this.refreshBooks();
	}

	private refreshBooks(): void {
		this.bookHttpService.getAllBooks().subscribe((books) => {
			this.bookList = [...books];
			this.filteredBookList = [...books];
			console.log(this.bookList);
		});
	}

	public handleSearchChange(input: string): void {
		if (input.length >= 3) {
			setTimeout(() => {
				this.filteredBookList = this.bookList.filter((book: Book) => {
					return book?.title?.toLocaleLowerCase().includes(input.toLocaleLowerCase());
				});
			}, 1000);
		} else {
			this.filteredBookList = this.bookList;
		}
	}
}
