import React from "react";
import "./Login.css";
import Slack_RGB from "../../img/Slack_RGB.svg";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const Login = () => {
  const [, dispatch] = useStateValue();
  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("Login successful", result);
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((error) => {
        console.log("Login failed", error);
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={Slack_RGB} alt="slack logo" />
        <h1>Log in to slack clone</h1>
        <p>slack-clone.slack.com</p>
        <Button onClick={login}>Log in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
