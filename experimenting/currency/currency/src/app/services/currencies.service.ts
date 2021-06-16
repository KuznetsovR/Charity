import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { defaultCurrencies } from '../entities/mock';
import { Currencies } from '../entities/types';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor() { }
  private _currencies$ = new BehaviorSubject<Currencies>(defaultCurrencies)
  get currencies$(): Observable<Currencies> {
    return this._currencies$
  }
  changeValue(value: number, rateToUsd: number){
    this._currencies$.value.currentPriceInUsd = value * (1/rateToUsd)
    // console.log(this._currencies$.value.currentPriceInUsd)
    for (let currency of this._currencies$.value.currencies){
      currency.value = +(this._currencies$.value.currentPriceInUsd * currency.rateToUsd).toFixed(2)
    }
  }
  updateRates(){
    fetch('http://www.floatrates.com/daily/usd.json', {method: "GET"}).then((res)=> res.json()).then((res)=> {
    for (let currency of this._currencies$.value.currencies){
      if (currency.name ==="USD") continue
      currency.rateToUsd = res[currency.name.toLowerCase()].rate
    }
    console.log(this._currencies$.value)
    this.changeValue(this._currencies$.value.currentPriceInUsd, 1)
  })
  }
}
