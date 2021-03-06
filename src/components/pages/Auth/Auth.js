import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Carousel from 'react-bootstrap/Carousel';

import recordImg from '../../shared/Images/vinyl-icon-2.png';
import elevators from '../../shared/Images/13thfloorelevators.jpg';
import dino from '../../shared/Images/dino.jpg';
import bonnie from '../../shared/Images/bonnie.jpg';
import miles from '../../shared/Images/miles.jpg';
import minutemen from '../../shared/Images/minutemen.jpg';
import sonic from '../../shared/Images/sonic.jpg';
import velvet from '../../shared/Images/velvet.jpg';
import './Auth.scss';

const Auth = () => {
  const loginClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleProvider);
  };

  return (
    <div className="Auth mt-2 justify-content-center">
      <div className="welcome container-fluid justify-content-center">
        <div className="welcome-message text-center">
          <h1>Welcome to Recordz!</h1>
          <h6 className="text-center m-4">
            Have you ever forgotten what records you have? Do you want to listen to something different that may be in the lost cracks of your collection? Or do you just want to look through your collection right here in the palm of your hand? With Recordz you can do all that and more. We'll be your one-stop shop for digitally storing and viewing your record collection!
          </h6>
          <button className="btn btn-danger button text-center pl-4 pr-4" onClick={loginClickEvent}><i className="fab fa-google fa-lg mr-2"></i>Login</button>
        </div>
        <div className="recordImg text-center">
        <img src={recordImg} alt="Recordz Logo" width="500" height="500" />
        </div>
      </div>
      <div className="features container-fluid justify-content-center mt-4">
        <div className="feature1 text-center ml-4 mr-4">
        <i className="fas fa-4x fa-record-vinyl mb-4"></i>
          <h2>RNDM PICKER!</h2>
          <h6 className="mt-4">
            Randomly pick a record from your collection when you're feeling lazy, but want to be reminded of a record lost in the cracks.
          </h6>
        </div>
        <div className="feature2 text-center ml-4 mr-4">
        <i className="fas fa-4x fa-record-vinyl mb-4"></i>
          <h2>VIEW YOUR COLLECTION</h2>
          <h6 className="mt-4">
            Powered by the Discogs API, Recordz will show you your albums in all their 12" glory with album art front and center. With a few clicks you can dig deeper and find out more about your favorite record or artist.
          </h6>
        </div>
        <div className="feature3 text-center ml-4 mr-4">
        <i className="fas fa-4x fa-record-vinyl mb-4"></i>
          <h2>EDIT / ADD / DELETE</h2>
          <h6 className="mt-4">
            You'll have full control over your record collection here. Sold something? delete it. Made a particularly fruitful trip to the record store? Add the new wax here.
          </h6>
        </div>
      </div>
      <div className="blowout container-fluid justify-content-center">
        <div className="blowout-message text-center mb-4">
          <h1>See your album art in all of it's original 12" glory!</h1>
          <h6 className="mt-4">
            Vinyl is meant to be seen, felt, grasped in your hands and dissected. Here at Recordz we take this experience very seriously. We've tried to replicate that feeling by displaying you albums art first, and when clicked they will flip over revealing all other desirable information through the power of the Discogs API.
          </h6>
        </div>
        <div className="blowout-img text-center">
          <Carousel
          controls={false}
          interval={5000}
          wrap={true}
          // fade={true}
          pause={'hover'}
          >
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-item"
                src={elevators}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bonnie}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={dino}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={miles}
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={minutemen}
                alt="Fifth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={sonic}
                alt="Sixth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={velvet}
                alt="Seventh slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Auth;
