/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import "./Signin.js";
import firebase from "../../../firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "./Signin.css";

// import Homepage from "../Homepage.js";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  // const history = Link();
  // const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Step 2: Initialize loading state
  // const history  = useHistory();("");
  const navigate = useNavigate();

  const handleSignIn = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Sign-in successful, navigate to the next page
      navigate("/signup");
    } catch (error) {
      // Handle sign-in errors here
      setError(error.message);
      setLoading(false);
    }
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/selling");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" noValidate>
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">Sign In</h1>
          <div className="text-center"></div>
          <div className="form-group mt-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group mt-3">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="button" onClick={onSubmit}>
              Sign In
            </button>
            <div className="text-center2">
              Create An Account.{" "}
              <span className="link-primary">
                <Link to="/signup" className="link">
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
