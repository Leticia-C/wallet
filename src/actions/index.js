// Coloque aqui suas actions
const ADD_USER = 'ADD_USER';
const WALLET_INFO = 'WALLET_INFO';

export { ADD_USER, WALLET_INFO };

export const getUserEmail = (email) => ({ type: ADD_USER, email });

export const getWalletInfo = (wallet) => ({ type: WALLET_INFO, wallet });
