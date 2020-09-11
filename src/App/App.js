import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';
import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/pages/Navbar/Navbar';
import Home from '../components/pages/Home/Home';
import YourCollection from '../components/pages/YourCollection/YourCollection';
import SingleAlbum from '../components/pages/SingleAlbum/SingleAlbum';
import AddAlbum from '../components/pages/AddAlbum/AddAlbum';
import EditAlbum from '../components/pages/EditAlbum/EditAlbum';

import './App.scss';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const App = () => {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });
    return () => removeListener();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <MyNavbar authed={authed} />
          <div className="container">
            <Switch>
              <PrivateRoute path="/home" component={Home} authed={authed} />
              <PrivateRoute path="/collection" component={YourCollection} authed={authed} />
              <PrivateRoute path="/collection/new" component={AddAlbum} authed={authed} />
              <PrivateRoute path="/edit/:recordId" component={EditAlbum} authed={authed} />
              <PrivateRoute path="/single/:recordId" component={SingleAlbum} authed={authed} />
              <PublicRoute path="/auth" component={Auth} authed={authed} />
              <Redirect from="*" to="/home" />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
};

export default App;
