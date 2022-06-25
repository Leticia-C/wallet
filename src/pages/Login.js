import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserEmail } from '../actions';

class Login extends React.Component {
  state= {
    isSaveButtonDisabled: true,
    password: '',
    email: '',
  }

  hadleChange=({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.filterSubmit());
  }

  filterSubmit = () => {
    const noMagicNumber = 5;
    const { password, email } = this.state;
    const emailFilter = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    //  consulta do código acima:https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript?page=3&tab=scoredesc
    if (password.length > noMagicNumber && emailFilter.test(email)) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

   handleClick =(event) => {
     event.preventDefault();
     const { history, user } = this.props;
     const { email } = this.state;
     user(email);
     history.push('/carteira');
   }

   render() {
     const { isSaveButtonDisabled, password, email } = this.state;
     return (
       <div>
         <fieldset>
           <form>
             <h1> Login</h1>
             <label htmlFor="email">
               Adicione Email:
               <input
                 name="email"
                 id="email"
                 type="email"
                 data-testid="email-input"
                 value={ email }
                 onChange={ this.hadleChange }
               />
             </label>
             <label htmlFor="password">
               Adicione Senha:
               <input
                 name="password"
                 id="password"
                 type="password"
                 data-testid="password-input"
                 value={ password }
                 onChange={ this.hadleChange }
               />
             </label>

             <button
               type="button"
               disabled={ isSaveButtonDisabled }
               name="btn-login"
               id="btn-login"
               onClick={ this.handleClick }
             >
               Entrar
             </button>
           </form>
         </fieldset>
       </div>

     );
   }
}

const mapDispatchToProps = (dispatch) => ({
  user: (email) => dispatch(getUserEmail(email)),
});

Login.propTypes = {
  user: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,

};

export default connect(null, mapDispatchToProps)(Login);
