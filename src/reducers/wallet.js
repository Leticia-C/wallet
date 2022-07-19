import { ERROR_REQUEST,
  SAVE_CURRENCIES, SAVE_EXPENSES, DELITE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return { ...state, currencies: action.wallet };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.wallet],
    };
  case ERROR_REQUEST:
    return { ...state, error: action.error };
  case DELITE_EXPENSES:
    return {
      ...state,
      expenses: action.delite,
      itor: false,
    };
  default:
    return state;
  }
};

export default walletReducer;
