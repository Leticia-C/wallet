// Coloque aqui suas actions
const ADD_USER = 'ADD_USER';
const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
const WALLET_INFO = 'WALLET_INFO';

export { ADD_USER, SAVE_CURRENCIES, WALLET_INFO };

export const getUserEmail = (email) => ({ type: ADD_USER, email });
export const getCurrencies = (wallet) => ({ type: SAVE_CURRENCIES, wallet });
export const getWalletInfo = (wallet) => ({ type: WALLET_INFO, wallet });
