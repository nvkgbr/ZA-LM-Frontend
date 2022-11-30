import { Component, OnInit } from '@angular/core';
import { Log } from '../../model/log.model';
import { LoadService } from '../../services/load.service';
import { LogHttpService } from '../../services/log-http/log-http.service';

@Component({
	selector: 'lm-logs',
	templateUrl: './logs.component.html',
	styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
	public logList: Log[] = [];

	public listOfColumn = [
		{
			title: 'Method',
			compare: (a: Log, b: Log) => a.method.localeCompare(b.method),
			priority: false
		},
		{
			title: 'Time',
			compare: (a: Log, b: Log) => a.time.toString().localeCompare(b.time.toString()),
			priority: 2
		}
	];
	constructor(private loadService: LoadService, private logsHttpService: LogHttpService) {
		this.loadService.show();
	}

	public ngOnInit(): void {
		this.refreshLogs();
	}

	private refreshLogs(): void {
		this.loadService.show();
		this.logsHttpService.getAllLog().subscribe((logs) => {
			this.logList = [...logs];
			console.log(this.logList);
			this.loadService.hide();
		});
	}
}
