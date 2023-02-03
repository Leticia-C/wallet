import { ERROR_REQUEST,
  SAVE_CURRENCIES, SAVE_EXPENSES, DELITE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
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
    };
  default:
    return state;
  }
};

export default walletReducer;
