// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const ERROR_REQUEST = 'ERROR_REQUEST';
export const DELITE_EXPENSES = 'DELITE_EXPENSES';

export const getUserEmail = (email) => ({ type: ADD_USER, email });
export const getCurrencies = (wallet) => ({ type: SAVE_CURRENCIES, wallet });
export const getExpensesInfo = (wallet) => ({ type: SAVE_EXPENSES, wallet });
export const deliteExpenses = (delite) => ({ type: DELITE_EXPENSES, delite });
export const errorRequest = (error) => ({ type: ERROR_REQUEST, error });

export const expensesApi = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => dispatch(getExpensesInfo(json)))
    .catch((error) => dispatch(errorRequest(error)));
};
