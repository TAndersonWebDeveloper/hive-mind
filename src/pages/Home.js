import React, { useEffect, useState } from "react";
import "./Home.css";
import logo from "../assets/Hive-Mind-notxt.png";
import SignUpForm from "../components/SignUpForm";

// import { useSelector, useDispatch } from "react-redux";
import { auth } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import SignInForm from "../components/SignInForm";

import Content from "../components/Content";
function Home() {
  // const [loggedIn, setIsLoggedIn] = useState(null);
  // const loggedInState = useSelector((state) => state.signedUp.signedUp);
  const [user, setUser] = useState({});
  const [signUpClicked, setSignUpClicked] = useState(false);
  const [loginClicked, setLogInClicked] = useState(false);
  if (user) {
    console.log(user);
  }
  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setSignUpClicked(false);
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (auth.currentUser != null) {
        console.log(user);
      } else {
        console.log("no one logged in");
      }
    });
  }, []);

  const loginBtnHandler = () => {
    setLogInClicked(!loginClicked);
    setSignUpClicked(false);
  };
  const signUpBtnHandler = () => {
    setLogInClicked(false);
    setSignUpClicked(!signUpClicked);
  };

  return (
    <section className="home-page">
      <div className="home-hero">
        <div className="home-txt--container">
          <img src={logo} alt="" />
        </div>
        <div>
          <div className="home-header--txt">
            <h1>Hive Mind</h1>
            <p>
              <span>Join the Buzz!</span>
            </p>
          </div>
          <div className="btn-container">
            {!auth?.currentUser?.email && (
              <>
                <button className="home-signup--btn" onClick={signUpBtnHandler}>
                  Sign Up
                </button>
                <button className="home-signin--btn" onClick={loginBtnHandler}>
                  Log In
                </button>
              </>
            )}
            {auth.currentUser && (
              <button className="home-signin--btn" onClick={logOut}>
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>

      {!auth.currentUser && !loginClicked && (
        <div>{signUpClicked && <SignUpForm />}</div>
      )}
      {!auth.currentUser && <div>{loginClicked && <SignInForm />}</div>}
      {auth.currentUser && <Content />}
    </section>
  );
}

export default Home;
