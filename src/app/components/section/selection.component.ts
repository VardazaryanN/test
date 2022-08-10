

import { CurrencyapidataService } from '../../currencyapidata.service';
import { HostListener } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-section',
	templateUrl: 'section.component.html',
	styleUrls: ['section.component.scss']
})

export class SectionComponent implements OnInit {
	@Output() outEnterName = new EventEmitter<string>();

	currjson: any = [];
	dataObj: any = {};
	variablesString: string =''
	
	constructor(private currency: CurrencyapidataService){}
	
	convert(base: string, cont2: string, inpOne: any){

		this.currency.getcurrencydata(base).subscribe(data =>{
			
			this.currjson = JSON.stringify(data)
			this.currjson = JSON.parse(this.currjson)
			// this.result = Number(inpOne) * this.currjson.rates.cont2 // тут this.currjson.rates.cont2 = undefined
			if(cont2 = 'USD') this.dataObj.result = Number(inpOne) * this.currjson.rates.USD;
			if(cont2 = 'EUR') this.dataObj.result = Number(inpOne) * this.currjson.rates.EUR;
			if(cont2 = 'UAH') this.dataObj.result = Number(inpOne) * this.currjson.rates.UAH;

			console.log(this.currjson)
		})
			this.dataObj.base = base;
			this.dataObj.cont2 = cont2;
			this.dataObj.inpOne = inpOne;
			
			this.variablesString = JSON.stringify(this.dataObj);
			this.outEnterName.emit(this.variablesString);
		}
	
		ngOnInit(): void {console.log(1)}
}