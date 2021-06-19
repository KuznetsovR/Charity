import { Currencies } from "./types";

export const defaultCurrencies: Currencies = {
    currencies: [
        {imgSrc: 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg', imgAlt: 'usd', value: undefined, name: 'USD', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png', imgAlt: 'rub', value: undefined, name: 'RUB', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg', imgAlt: 'eur', value: undefined, name: 'EUR', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png', imgAlt: 'gbp', value: undefined, name: 'GBP', rateToUsd: 1},
        {imgSrc: 'https://img5.goodfon.ru/wallpaper/nbig/b/e8/japan-flag-flag-of-japan-japanese-flag-japan-large-flag.jpg', imgAlt: 'jpy', value: undefined, name: 'JPY', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1024px-Flag_of_the_People%27s_Republic_of_China.svg.png', imgAlt: 'cny', value: undefined, name: 'CNY', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png', imgAlt: 'inr', value: undefined, name: 'INR', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Civil_Ensign_of_Switzerland.svg/1500px-Civil_Ensign_of_Switzerland.svg.png', imgAlt: 'chf', value: undefined, name: 'CHF', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png', imgAlt: 'aud', value: undefined, name: 'AUD', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/2560px-Flag_of_Sweden.svg.png', imgAlt: 'sek', value: undefined, name: 'SEK', rateToUsd: 1},
    ], 
    cryptoCurrencies: [
        {imgSrc: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1.png', imgAlt: 'btc', value: undefined, name: 'Bitcoin', rateToUsd: 1},
        {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png', imgAlt: 'eth', value: undefined, name: 'Ethereum', rateToUsd: 1},
        {imgSrc: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Binance-Coin-BNB-icon.png', imgAlt: 'bnb', value: undefined, name: 'Binance Coin', rateToUsd: 1},
        {imgSrc: 'https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png', imgAlt: 'ada', value: undefined, name: 'Cardano', rateToUsd: 1},
        {imgSrc: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Dogecoin-DOGE-icon.png', imgAlt: 'doge', value: undefined, name: 'Dogecoin', rateToUsd: 1},
        {imgSrc: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png', imgAlt: 'xrp', value: undefined, name: 'XRP', rateToUsd: 1},
        {imgSrc: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png', imgAlt: 'dot', value: undefined, name: 'Polkadot', rateToUsd: 1},
        {imgSrc: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png', imgAlt: 'uni', value: undefined, name: 'Uniswap', rateToUsd: 1},
        {imgSrc: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png', imgAlt: 'bch', value: undefined, name: 'Bitcoin Cash', rateToUsd: 1},
        {imgSrc: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png', imgAlt: 'ltc', value: undefined, name: 'Litecoin', rateToUsd: 1},
        {imgSrc: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png', imgAlt: 'sol', value: undefined, name: 'Solana', rateToUsd: 1},
        
    ],
    currentPriceInUsd: 100
}