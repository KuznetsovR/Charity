export interface CurrencyListItem {
    imgSrc: string
    imgAlt: string
    value: number
    rateToUsd: number
    name: string
}
export interface Currencies {
    currencies: CurrencyListItem[]
    currentPriceInUsd: number
}