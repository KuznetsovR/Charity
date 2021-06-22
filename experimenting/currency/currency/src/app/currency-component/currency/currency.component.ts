import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CurrencyListItem } from 'src/app/entities/types';
import { CurrenciesService } from 'src/app/services/currencies.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyComponent implements OnInit {
  @Input() currency!: CurrencyListItem

  valueIsNan: boolean = false
  constructor(private currenciesService: CurrenciesService) { }
  
  changeValue(event: Event){
    let value = (event.target as HTMLInputElement).valueAsNumber
    this.isNaN(value)
    
    this.currenciesService.changeValue(value, this.currency.rateToUsd)
  }
  isNaN(val: any){
    this.valueIsNan = isNaN(val)
  }
  ngOnInit(): void {
  }

}
