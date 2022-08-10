import { Component, OnInit, HostListener } from '@angular/core';
import { CurrencyapidataService } from '../../currencyapidata.service';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {


	USD:any = '';
	EUR:any = '';
	
	currjsonForUSD: any = [];
    currjsonForEUR: any = [];

	@HostListener('window:load')
	onLoad() {
	 this.currency.getcurrencydata('USD').subscribe(data =>{
			
			 this.currjsonForUSD = JSON.stringify(data)
			 this.currjsonForUSD = JSON.parse(this.currjsonForUSD)
			 this.USD =  Math.round( this.currjsonForUSD.rates.UAH * 1000) / 1000		 
		})

	 this.currency.getcurrencydata('EUR').subscribe(data =>{
			
			 this.currjsonForEUR = JSON.stringify(data)
			 this.currjsonForEUR = JSON.parse(this.currjsonForEUR)
			 this.EUR = Math.round( this.currjsonForEUR.rates.UAH * 1000) / 1000
			 		 
		})
 	}
	constructor(private currency: CurrencyapidataService){}
	ngOnInit(): void {console.log(1)}
}