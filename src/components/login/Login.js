import React, { useEffect } from "react";
import "./login.css";

import { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/login/login.actions";

import { Button } from "@material-ui/core";

const Login = () => {
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.loginUser);
  const { user } = loginUser;

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      dispatch(login(user));
    });
    return () => {
      subscribe();
    };
    // eslint-disable-next-line
  }, [user]);

  const signin = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(login(result.user));
      // Cookie.set("userInfo", JSON.stringify(result.user.refreshToken));
    }).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__log">
        <img
          src="https://www.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
          alt="facebook_logo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="facebook_title"
        />
      </div>
      <Button type="submit" onClick={signin}>Signin</Button>
    </div>
  );
};

export default Login;
