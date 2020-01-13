import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, withRouter, Redirect, useHistory, Switch } from 'react-router-dom'
import Landingpage from './continers/landingpage/Landingpage';
import { LandingUpperBar } from './components/landingUpperBar/landingUpperBar';
import { LoginPage } from './continers/loginPage/loginPage';
import RegisterPage from './continers/register/register';
import fire from './database/config/Fire'
import { fetchUsers } from './store/actions/user';
import ConsumerNavbar from './components/consumerNavbar/consumerNavbar';
import HomeConsumer from './continers/consumer/home/HomeConsumer';



const HomeRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(state => state.user.user)
  return (
    <Route
      {...rest}
      render={
        props => {
          if (user === null) {
            return <Component {...props} {...rest} />
          } else {
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          }
        }
      }
    />
  )
}

const DefaultPathRoute = ({ component: Component, componentConsumidor: ComponentConsumidor, componentPrestador: ComponentPrestador, ...rest }) => {
  const user = useSelector(state => state.user.user)
  return (
    <Route
      {...rest}
      render={
        props => {
          if (user === null) {
            return Component ? <Component {...props} /> : null
          } else if (user.tipo === 'Consumidor') {
            return ComponentConsumidor ? <ComponentConsumidor {...props} /> : null
          } else if (user.tipo === 'Prestador') {
            return ComponentPrestador ? <ComponentPrestador {...props} /> : null
          } else {
            console.log("Undefined user or user type")
          }
        }
      }
    />
  )
}

const UsersRoute = ({ component: Component, componentConsumidor: ComponentConsumidor, componentPrestador: ComponentPrestador, ...rest }) => {
  const user = useSelector(state => state.user.user)
  return (
    <Route
      {...rest}
      render={
        props => {
          if (user === null) {
            return Component ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          } else if (user.tipo === 'Consumidor') {
            return ComponentConsumidor ? <ComponentConsumidor {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          } else if (user.tipo === 'Prestador') {
            return ComponentPrestador ? <ComponentPrestador {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          } else {
            console.log("Undefined user or user type")
          }
        }
      }
    />
  )
}

function Probando({name}){
  return(
    <div>{name}</div>
  )
}

function App() {

  const dispatch = useDispatch();

  const history = useHistory();

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


  /* Rules */
  /* -Every path needs an exact path for redirect at least  */
  return (
    <>
      <Switch>
        <HomeRoute exact strict path="/ingresar/ingresar" component={Landingpage} />
        <DefaultPathRoute path="/" component={LandingUpperBar} componentConsumidor={ConsumerNavbar} componentPrestador={null} />
      </Switch>
      <Switch>
        <DefaultPathRoute exact path="/" component={Landingpage} componentConsumidor={HomeConsumer} componentPrestador={null} />
        <HomeRoute path="/ingresar" component={Probando} name={'dinamic ingresar'} />
        <HomeRoute path="/registrarse" component={RegisterPage} />
        <Redirect to='/' />
      </Switch>
      <Switch>
        <HomeRoute exact path="/ingresar" component={Probando} name={'exact ingresar'} />
        <HomeRoute path="/ingresar/ing" component={Probando} name={'ingresar ing'} />
        <Redirect from='/ingresar/*' to='/' />
      </Switch>
    </>
  );
}

export default App;
