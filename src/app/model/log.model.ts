export interface Log {
	partitionKey: string;
	rowKey: string;
	method: string;
	url: string;
	data: string;
	time: Date;
}
