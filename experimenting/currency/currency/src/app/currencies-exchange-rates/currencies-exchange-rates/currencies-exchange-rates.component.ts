import { Component, OnInit } from '@angular/core';
import { Currencies } from 'src/app/entities/types';
import { CurrenciesService } from 'src/app/services/currencies.service';

@Component({
  selector: 'app-currencies-exchange-rates',
  templateUrl: './currencies-exchange-rates.component.html',
  styleUrls: ['./currencies-exchange-rates.component.scss']
})
export class CurrenciesExchangeRatesComponent implements OnInit {
  currencies!: Currencies;
  
  constructor(private currenciesService: CurrenciesService) {}
  ngOnInit(): void {
    this.currenciesService.currencies$.subscribe((currencies) => {
      console.log("Currencies", currencies);
      this.currencies = currencies;
    })
    this.currenciesService.updateRates()
    // setInterval(()=> this.currenciesService.updateRates(), 60 * 1000)
  }
}
