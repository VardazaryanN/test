import { Component } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myCalculator';
  currjson: any = [];
  currjsonForUSD: any = [];
  currjsonForEUR: any = [];

  base = 'USD';
  cont2 = 'USD';
  isUSD = 'USD';
  isEUR = 'EUR';
  header1 = 'USD'
  header2 = 'USD'
  inpOne = 1;
 
  result: any = ''

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
 	changeNumOn(c: any){
		this.inpOne = +c;
		console.log(c)
	}
	
  changebase(a: string){
	this.base = a;
	
  }
  tocountry(b: string){
	this.cont2 = b;
	
  }
  constructor(private currency: CurrencyapidataService){}

	convert(a: string, b: string, c: any){
		this.changeNumOn(c);
		
		this.changebase(a);
		this.tocountry(b);
		this.currency.getcurrencydata(this.base).subscribe(data =>{
			
			 this.currjson = JSON.stringify(data)
			 this.currjson = JSON.parse(this.currjson)
			 
			 if(this.cont2 == 'USD'){
				
					this.result = this.inpOne * this.currjson.rates.USD
				
			 }

			 if(this.cont2 == 'EUR'){
				
				this.result = this.inpOne * this.currjson.rates.EUR;
				
			 }

			  if(this.cont2 == 'UAH'){
				
				this.result = this.inpOne * this.currjson.rates.UAH
				
			 }
			 
		})
	}
  
}
