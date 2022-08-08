

import { CurrencyapidataService } from '../../currencyapidata.service';
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-section',
	templateUrl: 'section.component.html',
	styleUrls: ['section.component.scss']
})

export class SectionComponent implements OnInit {
	currjson: any = [];
  
  result: any = '';
 
  base = 'USD';
  cont2 = 'USD';
  
  inpOne = 1;
 
	constructor(private currency: CurrencyapidataService){

	}
	convert(a: string, b: string, c: any){

		this.base = a;
		this.cont2 = b;
		this.inpOne = +c;
		
		this.currency.getcurrencydata(this.base).subscribe(data =>{
			
			 this.currjson = JSON.stringify(data)
			 this.currjson = JSON.parse(this.currjson)
			 
			 if(this.cont2 == 'USD'){ this.result = this.inpOne * this.currjson.rates.USD }

			 if(this.cont2 == 'EUR'){ this.result = this.inpOne * this.currjson.rates.EUR }

			 if(this.cont2 == 'UAH'){ this.result = this.inpOne * this.currjson.rates.UAH }
			 console.log(this.result)
		})
	}
	ngOnInit(): void {
		console.log(1)
	}
}