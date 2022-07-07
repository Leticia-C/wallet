import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies, getExpensesInfo } from '../actions';

const INICIAL_STATE = {
  expenses: {
    id: 0,
    value: 0,
    currency: '',
    method: '',
    tag: '',
    description: '',
    exchangeRates: '' },
};
class Wallet extends React.Component {
  state = INICIAL_STATE

  componentDidMount() {
    this.getCurrenciesApi();
  }

  getCurrenciesApi = async () => {
    const getApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currenciesJson = await getApi.json();
    const currencies = Object.keys(currenciesJson).filter((coin) => coin !== 'USDT');
    const { currenciesApi } = this.props;
    currenciesApi(currencies);
  }

    handleChange = ({ target }) => {
      const { name, value } = target;
      this.setState({ [name]: value });
    }

    handleClick= async (event) => {
      event.preventDefault();
      const getApiExpenses = await fetch('https://economia.awesomeapi.com.br/json/all');
      const expensesJson = await getApiExpenses.json();
      const { expensesApi, expenses } = this.props;
      const { value, method, tag, description, currency } = this.state;
      await expensesApi(
        { value,
          method,
          tag,
          description,
          currency,
          id: expenses.length,
          exchangeRates: expensesJson },
      );
      this.setState({ value: 0 });
    }

    render() {
      const { currencies, email, expenses } = this.props;
      const { value, method, tag, description, currency,
        exchangeRates, id } = this.state;
      console.log(exchangeRates, id);
      const totalPrice = expenses
        .reduce((acc, curr) => {
          console.log(curr);
          return (acc + Number(curr.value)
    * (curr.exchangeRates[curr.currency].ask)
          );
        }, 0);
      return (
        <div>
          <header>
            <h1>TrybeWallet</h1>
            <h3 data-testid="email-field">{email}</h3>
            <h3 data-testid="total-field">{ totalPrice.toFixed(2)}</h3>
            <h3 data-testid="header-currency-field">BRL</h3>
          </header>
          <fieldset>
            <label htmlFor="value-input">
              Valor da despesa:
              <br />
              <input
                type="text"
                data-testid="value-input"
                name="value"
                id="value-input"
                value={ value }
                onChange={ this.handleChange }
              />
            </label>
            <hr />
            <label htmlFor="description-input">
              Descrição da despesa:
              <br />
              <textarea
                type="text"
                data-testid="description-input"
                name="description"
                id="description-input"
                value={ description }
                onChange={ this.handleChange }
              />
            </label>
            <hr />
            <label htmlFor="currencies">
              Moeda
              <br />
              <select
                value={ currency }
                onChange={ this.handleChange }
                id="currencies"
                name="currency"
              >
                {currencies.map((curr, index) => (
                  <option key={ index }>
                    {curr}

                  </option>))}
              </select>
            </label>
            <hr />
            <label htmlFor="method-input">
              Forma de Pagamento:
              <br />
              <select
                name="method"
                id="method-input"
                data-testid="method-input"
                value={ method }
                onChange={ this.handleChange }
              >
                <option>Dinheiro</option>
                <option>Cartão de crédito</option>
                <option>Cartão de débito</option>
              </select>
            </label>
            <hr />
            <label htmlFor="tag-input">
              Despesa relacionada à seguinte  áreas :
              <br />
              <select
                name="tag"
                id="tag-input"
                data-testid="tag-input"
                value={ tag }
                onChange={ this.handleChange }
              >
                <option>Alimentação</option>
                <option>Lazer</option>
                <option>Trabalho</option>
                <option>Transporte</option>
                <option>Saúde</option>
              </select>
            </label>
            <button
              type="submit"
              onClick={ this.handleClick }

            >
              Adicionar despesa
            </button>
          </fieldset>
          <table>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Tag</th>
                <th>Método de pagamento</th>
                <th>Valor</th>
                <th>Moeda</th>
                <th>Câmbio utilizado</th>
                <th>Valor convertido</th>
                <th> Moeda de conversão</th>
                <th> Editar/Excluir</th>
              </tr>
            </thead>
          </table>
        </div>
      );
    }
}

const mapDispatchToProps = (dispatch) => ({
  currenciesApi: (wallet) => dispatch(getCurrencies(wallet)),
  expensesApi: (expense) => dispatch(getExpensesInfo(expense)),
  sendError: (wallet) => dispatch(errorRequest(wallet)),
});
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  email: state.user.email,
  expenses: state.wallet.expenses,
});
Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  email: PropTypes.string.isRequired,
  currenciesApi: PropTypes.func.isRequired,
  expensesApi: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
