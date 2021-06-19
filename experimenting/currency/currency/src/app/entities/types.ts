export interface CurrencyListItem {
    imgSrc: string
    imgAlt: string
    value: number | undefined
    rateToUsd: number
    name: string
}
export interface Currencies {
    currencies: CurrencyListItem[]
    cryptoCurrencies: CurrencyListItem[]
    currentPriceInUsd: number
}