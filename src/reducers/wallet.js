// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
/*
import { WALLET_INFO } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [], // array de string
    expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
    editor: false, // valor booleano que indica de uma despesa está sendo editada
    idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  },
};

const walletReducer = (state = INITIAL_STATE, action) => {
  const { type, wallet } = action;
  switch (type) {
  case WALLET_INFO:
    return {
      ...state,
      wallet: {
        currencies: [...wallet], // array de string
        expenses: [...wallet], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
        editor: wallet, // valor booleano que indica de uma despesa está sendo editada
        idToEdit: wallet, // valor numérico que armazena o id da despesa que esta sendo editada
      },
    };
  default:
    return state;
  }
};

export default { walletReducer }; */
