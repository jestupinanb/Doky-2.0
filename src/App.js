import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Route, Redirect, Switch, useRouteMatch } from 'react-router-dom'
import Landingpage from './continers/landingpage/Landingpage';
import { LandingUpperBar } from './components/landingUpperBar/landingUpperBar';
import { LoginPage } from './continers/loginPage/loginPage';
import RegisterPage from './continers/register/register';
import fire from './database/config/Fire'
import { fetchUsers } from './store/actions/user';
import ConsumerNavbar from './components/consumerNavbar/consumerNavbar';
import HomeConsumer from './continers/consumer/home/HomeConsumer';
import PaseosPage from './continers/paseos/paseos_page';
import PaseosVisualizar  from './continers/paseos/paseos_visualizar';
import GuarderiasVisualizar from './continers/guarderia/guarderia_visualizar';
import GuarderiasPage from './continers/guarderia/guarderia_page';
import { LINK_GUARDERIAS, LINK_PASEOS } from './links';

const HomeRoute = ({ component: Component, children, ...rest }) => {
  const user = useSelector(state => state.user.user)
  return (
    <Route
      {...rest}
      render={
        props => {
          console.log("rest")
          console.log(rest)
          if (user === null) {
            return <Component {...props} />
          } else {
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          }
        }
      }
    />
  )
}


function App() {
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch();

  const NotFoundUrl = <> Esta pagina no existe! :(</>

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
    }, [dispatch]
  )

  if (useRouteMatch('/about')) {
    return <Route path='/about'><div>¡Ey! Estamos desarrollando la pagina de about!</div> </Route>
  }

  switch (user && user.tipo) {
    case 'Consumidor':
      return (
        <>
          <Route path='/'> <ConsumerNavbar /> </Route>
          <Switch>
            <Route exact path='/'> <HomeConsumer /> </Route>
            <Route exact path={LINK_PASEOS}> <PaseosPage/> </Route>
            <Route exact path='/paseos/:id'> <PaseosVisualizar/> </Route>
            <Route exact path={LINK_GUARDERIAS}> <GuarderiasPage/> </Route>
            <Route exact path={LINK_GUARDERIAS+"/:id"}> <GuarderiasVisualizar/> </Route>
            <Route> {NotFoundUrl} </Route>
          </Switch>
        </>
        )
    case 'Prestador':
      return {NotFoundUrl}
    default:
      return (
        <>
          <Route path='/'> <LandingUpperBar /> </Route>
          <Switch>
            <Route exact path='/'> <Landingpage /> </Route>
            <Route exact path='/registrarse'> <RegisterPage /> </Route>
            <Route exact path='/ingresar'> <LoginPage /> </Route>
            <Route> {NotFoundUrl} </Route>
          </Switch>
        </>
      )
  }
}

export default App;
