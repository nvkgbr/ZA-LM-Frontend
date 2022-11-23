import { Book } from './book.model';
import { Status } from './types/status.types';
import { Renter } from './renter.model';

export interface Rents {
	id: string;
	renter: Renter;
	book: Book;
	startDay: Date;
	expired: Date;
	status: Status;
}
