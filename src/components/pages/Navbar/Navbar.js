import React, { useEffect, useState } from 'react';
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

  // eslint-disable-next-line consistent-return
  const buildNavbar = () => {
    if (authed) {
      return (
        <nav className="ml-auto">
          <NavLink className="navlink" tag={NavLink} to="/home"> Home </NavLink>
          <NavLink className="navlink" tag={NavLink} to="/collection" > MyCollection </NavLink>
          <NavLink className="navlink" tag={NavLink} to='/rndm'> RNDM </NavLink>
          <NavLink className="navlink logout" tag={NavLink} to="" onClick={logMeOut}> Logout </NavLink>
        </nav>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <NavLink className="navlink navbar-brand" to="/home">Recordz</NavLink>
      <button className="navbar-toggler" type="button" onClick={toggle}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
          {buildNavbar()}
      </div>
    </nav>
  );
};

export default MyNavbar;
