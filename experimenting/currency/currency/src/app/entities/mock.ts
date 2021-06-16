import { Currencies } from "./types";

export const defaultCurrencies: Currencies = {
    currencies: [
        {imgSrc: 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg', imgAlt: 'usd', value: 1, name: 'USD', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png', imgAlt: 'rub', value: 1, name: 'RUB', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg', imgAlt: 'eur', value: 1, name: 'EUR', rateToUsd: 0.8},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png', imgAlt: 'gbp', value: 1, name: 'GBP', rateToUsd: 1},
        {imgSrc: 'https://img5.goodfon.ru/wallpaper/nbig/b/e8/japan-flag-flag-of-japan-japanese-flag-japan-large-flag.jpg', imgAlt: 'jpy', value: 1, name: 'JPY', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1024px-Flag_of_the_People%27s_Republic_of_China.svg.png', imgAlt: 'cny', value: 1, name: 'CNY', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png', imgAlt: 'inr', value: 1, name: 'INR', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Civil_Ensign_of_Switzerland.svg/1500px-Civil_Ensign_of_Switzerland.svg.png', imgAlt: 'chf', value: 1, name: 'CHF', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png', imgAlt: 'aud', value: 1, name: 'AUD', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/2560px-Flag_of_Sweden.svg.png', imgAlt: 'sek', value: 1, name: 'SEK', rateToUsd: 1},
    ], 
    currentPriceInUsd: 100
}