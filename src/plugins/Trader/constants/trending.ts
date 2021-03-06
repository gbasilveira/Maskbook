//#region plugin settings
export const PLUGIN_IDENTIFIER = 'com.maskbook.trader'
//#endregion

//#region apis
export const COIN_GECKO_BASE_URL = 'https://api.coingecko.com/api/v3'

// proxy: https://web-api.coinmarketcap.com/v1
export const CMC_V1_BASE_URL = 'https://coinmarketcap.provide.maskbook.com/v1'

// proxy: https://web-api.coinmarketcap.com/v1.1
export const CMC_V2_BASE_URL = 'https://widgets.coinmarketcap.com/v2'
//#endregion

// the CMC link of tokens
export const CMC_CURRENCIES_URL = 'https://coinmarketcap.com/currencies'

// the bitcoin ledger started at 03 Jan 2009
export const BTC_FIRST_LEGER_DATE = new Date('2009-01-03T00:00:00.000Z')

//#region settings about trader
export const CRYPTOCURRENCY_MAP_EXPIRES_AT = 60 /* seconds */ * 1000 /* milliseconds */
