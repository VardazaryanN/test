

import { Component, OnInit } from '@angular/core';
import { CurrencyapidataService } from '../../currencyapidata.service';
import { HostListener } from '@angular/core';
@Component({
	selector: 'app-result',
	templateUrl: 'result.component.html',
	styleUrls: ['result.component.scss']
})

export class ResultComponent implements OnInit {
	currjson: any = [];
	result: any = '';
	base = 'USD';
	cont2 = 'USD';
	
	inpOne = 1;
 
	constructor(private currency: CurrencyapidataService){}
	ngOnInit(): void {
		console.log(1)
	}
}