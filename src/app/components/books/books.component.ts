import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book.model';
import { BookHttpService } from 'src/app/services/book-http/book-http.service';
import { NzModalService } from 'ng-zorro-antd/modal';

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

	constructor(private bookHttpService: BookHttpService, private modal: NzModalService) {}

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

	public deleteClick(book: Book) {
		// if (confirm(`Are you sure you want to delete the book '${book.title}'`)) {
		// 	this.bookHttpService.deleteBook(book.id).subscribe((response) => {
		// 		console.log(response);
		// 		this.refreshBooks();
		// 	});
		// }
		this.modal.confirm({
			nzTitle: 'You sure you want to delete this book?',
			nzContent: `<b style="color: red;">${book.author}-${book.title}</b>`,
			nzOkText: 'Yes',
			nzOkType: 'primary',
			nzOkDanger: true,
			nzOnOk: () => this.deleteBook(book),
			nzCancelText: 'No',
			nzOnCancel: () => console.log('Cancel')
		});
	}

	public deleteBook(book: Book) {
		this.bookHttpService.deleteBook(book.id).subscribe((response) => {
			console.log(response);
			this.refreshBooks();
		});
	}
}
