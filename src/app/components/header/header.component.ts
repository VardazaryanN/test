import { Component, OnInit } from '@angular/core';
import { CurrencyapidataService } from '../../currencyapidata.service';
import { HostListener } from '@angular/core';
@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {
	currjsonForUSD: any = [];
    currjsonForEUR: any = [];
	isUSD = 'USD';
	isEUR = 'EUR';
	header1 = 'USD';
	header2 = 'USD';
	@HostListener('window:load')
	onLoad() {
	 this.currency.getcurrencydata(this.isUSD).subscribe(data =>{
			
			 this.currjsonForUSD = JSON.stringify(data)
			 this.currjsonForUSD = JSON.parse(this.currjsonForUSD)
			 this.header1 = this.currjsonForUSD.rates.UAH		 
		})

	 this.currency.getcurrencydata(this.isEUR).subscribe(data =>{
			
			 this.currjsonForEUR = JSON.stringify(data)
			 this.currjsonForEUR = JSON.parse(this.currjsonForEUR)
			 this.header2 = this.currjsonForEUR.rates.UAH
			 		 
		})
	
	
 	}
	constructor(private currency: CurrencyapidataService){}
	ngOnInit(): void {
		console.log(1)
	}
}