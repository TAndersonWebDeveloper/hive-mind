import React, { useState } from "react";
import "./SignUpForm.css";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signUpActions } from "../store/signed-up-slice";
import { useSelector, useDispatch } from "react-redux";
function SignUpForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const dispatch = useDispatch();
  const userSignedUp = useSelector((state) => state.signedUp.signedUp);

  //   useEffect(() => {
  //     if (auth?.currentUser?.email) {
  //       dispatch(signUpActions.toggle(true));
  //     }
  //   }, [signUpUserHandler]);

  const signUpUserHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword);
      setEnteredEmail("");
      setEnteredPassword("");
    } catch (err) {
      console.log(err);
    }
    dispatch(signUpActions.toggle(true));
  };

  return (
    <form className="signup-form" onSubmit={signUpUserHandler}>
      <h2>Sign Up</h2>
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
      {userSignedUp && <p>it worked</p>}
      <button>Submit</button>
    </form>
  );
}

export default SignUpForm;
