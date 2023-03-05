import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebase";
function SignInForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    signIn();
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, enteredEmail, enteredPassword);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="signup-form" onSubmit={loginHandler}>
      <h2>Sign In</h2>
      <input
        type="text"
        placeholder="E-mail"
        onChange={(e) => setEnteredEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setEnteredPassword(e.target.value);
        }}
      />

      <button>Submit</button>
    </form>
  );
}

export default SignInForm;
