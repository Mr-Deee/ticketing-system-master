import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Link, useNavigate } from "react-router-dom";
import "firebase/database";
import "./Signup.css";

const firebaseConfig = {
  apiKey: "AIzaSyBnNW06rCRrmuscM4IJZveVLuhQgcyGMJU",
  authDomain: "ticketing-system-adc5b.firebaseapp.com",
  projectId: "ticketing-system-adc5b",
  storageBucket: "ticketing-system-adc5b.appspot.com",
  messagingSenderId: "814092958752",
  appId: "1:814092958752:web:1d501b0549dfdf26d81045",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// const firestore = firebase.firestore();
const db = firebase.firestore();

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSignup = async (event) => {
    event.preventDefault();
    // Create a new user with email and password
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const { user } = userCredential;
        // Store additional user details in the database
        // firebase.database().ref("policeMen").push({
        //   name,
        //   email,
        //   userId: user.uid,
        // });
        // Redirect to the authentication page

        await db.collection("sellers").doc(user.id).set({
          name,
          email,
          password,
          userId: user.uid,
        });
        navigate("/signin");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSignup}>
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">Sign Up</h1>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary">
              <Link to="/signin" className="link">
                Sign In
              </Link>
            </span>
          </div>
          <div className="form-group mt-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              className="form-control mt-1"
              placeholder="Full name e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <input
              value={email}
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              // onClick={SignUpPage}
              className="button"
            >
              Sign Up
            </button>
          </div>
          <p className="text-center mt-2">
            {/* Forgot <a href="#">password?</a> */}
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
