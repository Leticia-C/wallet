// Coloque aqui suas actions
const ADD_USER = 'ADD_USER';
const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
const SAVE_EXPENSES = 'SAVE_EXPENSES';
const ERROR_REQUEST = 'ERROR_REQUEST';

export { ADD_USER, SAVE_CURRENCIES, SAVE_EXPENSES, ERROR_REQUEST };

export const getUserEmail = (email) => ({ type: ADD_USER, email });
export const getCurrencies = (wallet) => ({ type: SAVE_CURRENCIES, wallet });
export const getExpensesInfo = (wallet) => ({ type: SAVE_EXPENSES, wallet });
export const errorRequest = (error) => ({ type: ERROR_REQUEST, error });

export const expensesApi = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => dispatch(getExpensesInfo(json)))
    .catch((error) => dispatch(errorRequest(error)));
};
