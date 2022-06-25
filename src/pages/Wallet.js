import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';

class Wallet extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Header />

        <fieldset>
          <label htmlFor="value-input">
            Valor da despesa:
            <br />
            <input
              type="number"
              data-testid="value-input"
              name="value-input"
              id="value-input"
            />
          </label>
          <hr />
          <label htmlFor="description-input">
            Descrição da despesa:
            <br />
            <textarea
              type="text"
              data-testid="description-input"
              name="description-input"
              id="description-input"
            />
          </label>
          <hr />
          <label htmlFor="currencies">
            Moeda
            <br />
            <select id="currencies" name="currencies">
              {currencies.map((curr, index) => (<option key={ index }>{curr}</option>))}
            </select>
          </label>
          <hr />
          <label htmlFor="method-input">
            Forma de Pagamento:
            <br />
            <select
              name="method-input"
              id="method-input"
              data-testid="method-input"
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
              name="tag-input"
              id="tag-input"
              data-testid="tag-input"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});
Wallet.propTypes = {
  currencies: PropTypes.arrayOf({}).isRequired,
};
export default connect(mapStateToProps)(Wallet);
