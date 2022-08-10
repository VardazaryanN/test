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
  dataObj: any = {};

  constructor( currency: CurrencyapidataService){}
	passObj(variablesString: string) {
    this.dataObj = JSON.parse(variablesString)
	console.log(this.dataObj)
  }
}
