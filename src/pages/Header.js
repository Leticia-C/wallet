import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies } from '../actions';

class Header extends React.Component {
  async componentDidMount() {
    const getApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currenciesJson = await getApi.json();
    const currencies = Object.keys(currenciesJson).filter((coin) => coin !== 'USDT');
    const { currenciesApi } = this.props;
    currenciesApi(currencies);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <h3 data-testid="email-field">{email}</h3>
        <h3 data-testid="total-field">{0}</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});
const mapDispatchToProps = (dispatch) => ({
  currenciesApi: (wallet) => dispatch(getCurrencies(wallet)),
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currenciesApi: PropTypes.func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
