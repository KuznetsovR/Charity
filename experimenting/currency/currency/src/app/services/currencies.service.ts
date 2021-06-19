import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { defaultCurrencies } from '../entities/mock';
import { Currencies } from '../entities/types';
// import * as obj from '../asd'

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor() { }
  private _currencies$ = new BehaviorSubject<Currencies>(defaultCurrencies)
  get currencies$(): Observable<Currencies> {
    return this._currencies$
  }
  changeValue(value: number, rateToUsd: number = 1) {
    this._currencies$.value.currentPriceInUsd = value * (1/rateToUsd)
    
    // console.log(this._currencies$.value.currentPriceInUsd)
    for (let currency of this._currencies$.value.currencies) {
      currency.value = +(this._currencies$.value.currentPriceInUsd * currency.rateToUsd).toFixed(2)
    }
    for (let currency of this._currencies$.value.cryptoCurrencies) {
      currency.value = +(this._currencies$.value.currentPriceInUsd * currency.rateToUsd).toFixed(5)
    }
  }
  updateRates() {
    fetch('http://www.floatrates.com/daily/usd.json', { method: "GET" }).then((res) => res.json()).then((res) => {
      for (let currency of this._currencies$.value.currencies) {
        if (currency.name === "USD") continue
        currency.rateToUsd = res[currency.name.toLowerCase()].rate
      }
      this.changeValue(this._currencies$.value.currentPriceInUsd)
    })
    fetch('http://localhost:3000/', { method: "GET" }).then((res) => res.json()).then(((res) => {
      const cryptoCurrenciesArr: any[] = res
      console.log(  );
      
      for (let currency of this._currencies$.value.cryptoCurrencies) {
        const cryptoValuta = cryptoCurrenciesArr.find((value: any)=> currency.name === value.name)
        if (cryptoValuta === undefined) continue
        currency.rateToUsd = (1/cryptoValuta.quote.USD.price) 
        // let i = 0 
        // let elem: any = cryptoCurrenciesArr[0];
        // while (elem.name !== currency.name) {

        // }
        // if (currency.name === "USD") continue
        // currency.rateToUsd = cryptoCurrenciesArr[currency.name.toLowerCase()].rate
      }
      console.log(this._currencies$.value.cryptoCurrencies);
      this.changeValue(this._currencies$.value.currentPriceInUsd)
    }))
    // obj.func()
    // uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD',
  }
}
