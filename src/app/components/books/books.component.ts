import { Component, OnInit } from '@angular/core';
import { Book, UpdateBook } from 'src/app/model/book.model';
import { BookHttpService } from 'src/app/services/book-http/book-http.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { PostBook } from '../../model/book.model';
import { CreateBooksComponent } from './create-books/create-books.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { LoadService } from 'src/app/services/load.service';

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

	public listOfColumn = [
		{
			title: 'Title',
			compare: (a: Book, b: Book) => a.title.localeCompare(b.title),
			priority: false
		},
		{
			title: 'Author',
			compare: (a: Book, b: Book) => a.author.localeCompare(b.author),
			priority: 2
		},
		{
			title: 'ISBN',
			compare: (a: Book, b: Book) => a.ISBN.localeCompare(b.ISBN),
			priority: 1
		}
	];

	constructor(private bookHttpService: BookHttpService, private modal: NzModalService, private loadService: LoadService) {
		this.loadService.show();
	}

	public ngOnInit(): void {
		this.refreshBooks();
	}

	private refreshBooks(): void {
		this.loadService.show();
		this.bookHttpService.getAllBooks().subscribe((books) => {
			this.bookList = [...books];
			this.filteredBookList = [...books];
			console.log(this.bookList);
			this.loadService.hide();
		});
	}

	public handleSearchChange(input: string): void {
		this.loadService.show();
		if (input.length >= 3) {
			setTimeout(() => {
				this.filteredBookList = this.bookList.filter((book: Book) => {
					this.loadService.hide();
					return book?.title?.toLocaleLowerCase().includes(input.toLocaleLowerCase());
				});
			}, 1000);
		} else {
			this.filteredBookList = this.bookList;
			this.loadService.hide();
		}
	}

	public deleteClick(book: Book) {
		this.modal.confirm({
			nzTitle: 'You sure you want to delete this book?',
			nzContent: `<b style="color: red;">Author: ${book.author}<br>Title: ${book.title}</b>`,
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

	public createClick() {
		const ref: NzModalRef = this.modal.info({
			nzTitle: 'Create new book!',
			nzContent: CreateBooksComponent,
			nzOkText: 'Yes',
			nzOkType: 'primary',
			nzOkDanger: true,
			nzOnOk: () => this.createBook(ref.componentInstance.bookForm.value),
			nzCancelText: 'No',
			nzOnCancel: () => console.log('Cancel')
		});
	}

	private createBook(book: PostBook) {
		this.bookHttpService.createBook(book).subscribe(() => {
			this.refreshBooks();
		});
		console.log(book);
	}

	public updateClick(book: Book) {
		const ref: NzModalRef = this.modal.info({
			nzTitle: 'Update book!',
			nzContent: UpdateBooksComponent,
			nzOkText: 'Yes',
			nzOkType: 'primary',
			nzOkDanger: true,
			nzOnOk: () => this.updateBook(book.id, ref.componentInstance.bookForm.value),
			nzCancelText: 'No',
			nzOnCancel: () => console.log(ref.componentInstance.bookForm.value)
		});

		ref.componentInstance.title.setValue(book.title);
		ref.componentInstance.ISBN.setValue(book.ISBN);
		ref.componentInstance.author.setValue(book.author);
	}

	private updateBook(id: string, book: UpdateBook) {
		console.log(`${id} többi: ${JSON.stringify(book)}`);
		this.bookHttpService.updateBook(id, book).subscribe(() => {
			this.refreshBooks();
		});
	}
}
