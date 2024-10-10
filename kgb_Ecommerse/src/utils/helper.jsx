import { optionOfCurrencyExchange } from "./constant";

export const convertingPriceHandler = (price, exchangeRate) => Number((price*exchangeRate).toFixed(2));

export const currencySymbolHandler = (currentCurrency) => optionOfCurrencyExchange.find((elem) => elem.value === currentCurrency).symbol