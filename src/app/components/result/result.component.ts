

import { Component, Input, OnInit } from '@angular/core';
import { CurrencyapidataService } from '../../currencyapidata.service';
import { HostListener } from '@angular/core';
import { DataObj } from '../../models'
@Component({
	selector: 'app-result',
	templateUrl: 'result.component.html',
	styleUrls: ['result.component.scss']
})

export class ResultComponent implements OnInit {
	@Input() dataObj:DataObj;

	constructor(private currency: CurrencyapidataService){}
	ngOnInit(): void {
		console.log(1)
	}
}