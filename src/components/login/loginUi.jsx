import React from "react";
import "./style.css";
import Login from "./Login";
import { Link } from "react-router-dom";
const LoginUI = (props) => {
  const {
    onChange,
    switchLogin,
    onToggle,
    onSubmit,
    LoginError,
    LoginForm,
    Continue,
    onPressContinue,
    getOtp,
  } = props;

  return (
    <>
      <div className="LoginContainer">
        <div className="LeftWrapper">
          <div className="WelcomeContainer">
            <img
              alt="McAfeeLogo"
              className="Logo"
              src="https://cdn.jsdelivr.net/gh/atulrana007/McAfee-React-Appp/public/images/McAfee-Logo.png"
            />
            <div className="Intro">Sign in to your McAfee account</div>
            <div className="IntroSubHeading">
              Enter your email address so we can find your account.
            </div>
            <hr className="hr"></hr>
            <div className="bottom-heading">
              <p>
                Don’t have an account?
                <span>
                  <Link to="/signUp"> Create one now</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="RightWrapper">
          <Login
            LoginError={LoginError}
            onChange={onChange}
            switchLogin={switchLogin}
            onSubmit={onSubmit}
            LoginForm={LoginForm}
            onToggle={onToggle}
            onPressContinue={onPressContinue}
            Continue={Continue}
            getOtp={getOtp}
          />
        </div>
      </div>
    </>
  );
};

export default LoginUI;
