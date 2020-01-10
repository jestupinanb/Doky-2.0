import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landingpage from './continers/landingpage/Landingpage';
import { LandingUpperBar } from './components/landingUpperBar/landingUpperBar';
import { LoginPage } from './continers/loginPage/loginPage';
import RegisterPage from './continers/register/register';

function App() {
  return (
    <Router>
      <Route path="/" component={LandingUpperBar} />
      <Route exact path="/" component={Landingpage} />
      <Route path="/ingresar" component={LoginPage} />  
      <Route path="/registrarse" component={RegisterPage} />
    </Router>
  );
}

export default App;
