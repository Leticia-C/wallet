import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <header>
        <h1>Hello, TrybeWallet!</h1>
      </header>

      <Route exact path="/" component={ Login } />
    </div>
  );
}

export default App;
