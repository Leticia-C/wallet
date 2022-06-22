import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state= {
    isButtonValid: true,
  }

  isValid = ({ target }) => {
    const { value, name } = target;
    if (value.includes('@')) {
      this.setState({ [name]: value, isButtonValid: true });
    } else {
      this.setState({ isButtonValid: false });
    }
  }

  render() {
    const { isButtonValid } = this.state;
    return (
      <div>
        <form>
          <h1> Login</h1>
          <label htmlFor="email-input">
            Adicione Email:
            <input
              name="email-input"
              id="email-input"
              type="email"
              data-testid="email-input"
              onChange={ this.isValid }
            />
          </label>
          <label htmlFor="password-input">
            Adicione Senha:
            <input
              name="password-input"
              id="password-input"
              type="password"
              data-testid="password-input"
              minLength={ 6 }
            />
          </label>
        </form>
        <Link to="/carteira">
          <button
            checked={ isButtonValid }
            type="submit"
            onClick={ this.isValid }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
