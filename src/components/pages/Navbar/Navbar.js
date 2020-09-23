import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/auth';

const MyNavbar = (props) => {
  const { authed } = props;
  const [isOpen, setIsOpen] = useState(false);

  const logMeOut = (e) => {
    // e.preventDefault();
    firebase.auth().signOut();
  };

  const toggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const show = (isOpen) ? 'show' : '';

  // eslint-disable-next-line consistent-return
  const buildNavbar = () => {
    if (authed) {
      return (
        <ul className="navbar-nav ml-auto">
          <NavLink className="navlink" tag={NavLink} to="/home"> Home </NavLink>
          <NavLink className="navlink" tag={NavLink} to="/collection"> My Collection </NavLink>
          <NavLink className="navlink" tag={NavLink} to="/random"> RNDM </NavLink>
          <NavLink className="navlink logout" tag={NavLink} to="" onClick={logMeOut}> Logout </NavLink>
        </ul>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <NavLink className="navlink navbar-brand" to="/home">Recordz</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation" onClick={toggle}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${show}`} id="navbarToggle">
          {buildNavbar()}
      </div>
    </nav>
  );
};

export default MyNavbar;
