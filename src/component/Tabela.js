import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Tabela extends React.Component {
  render() {
    return (
      <div>
        <table>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th> Moeda de conversão</th>
          <th> Editar/Excluir</th>
        </table>
      </div>
    );
  }
}
/* const mapStateToProps = (state) => ({
  email: state.user.email,
});
const mapDispatchToProps = (dispatch) => ({
  currenciesApi: (wallet) => dispatch(getCurrencies(wallet)),
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currenciesApi: PropTypes.func.isRequired }; */

export default connect()(Tabela);
