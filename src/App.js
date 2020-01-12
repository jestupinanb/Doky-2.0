import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, withRouter, Redirect } from 'react-router-dom'
import Landingpage from './continers/landingpage/Landingpage';
import { LandingUpperBar } from './components/landingUpperBar/landingUpperBar';
import { LoginPage } from './continers/loginPage/loginPage';
import RegisterPage from './continers/register/register';
import fire from './database/config/Fire'
import { UserController } from './database/controllers/user_controller';
import { fetchUsers } from './store/actions/user';
import { HomeConsumer } from './continers/consumer/home/HomeConsumer';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(state => state.user.user)
  return (
    <Route
      {...rest}
      render={
        props => {
          if (user === null) {
            return <Component {...props} />
          } else {
            return //<Redirect to={{ pathname: '/consumidor', state: { from: props.location } }} />
          }
        }
      }
    />
  )
}

const HomeRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(state => state.user.user)
  return (
    <Route
      {...rest}
      render={
        props => {
          if (user === null) {
            return <LandingUpperBar {...props} />
          } else {
            return <HomeConsumer {...props} />
          }
        }
      }
    />
  )
}


function App(props) {

  const dispatch = useDispatch();

  useEffect(
    () => {
      const onAuthStateChanged = async () => {
        fire.auth().onAuthStateChanged(
          user => {
            dispatch(fetchUsers(user))
          }
        );
      }
      onAuthStateChanged()
    }, []
  )

  return (
    <>
      <HomeRoute path="/" component={LandingUpperBar} />
      <ProtectedRoute exact path="/" component={Landingpage} />
      <ProtectedRoute path="/ingresar" component={LoginPage} />
      <ProtectedRoute path="/registrarse" component={RegisterPage} />
      <Route path="/consumidor" component={RegisterPage} />
    </>
  );
}

export default withRouter(App);
