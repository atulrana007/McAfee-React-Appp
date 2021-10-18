import React from "react";
import "./style.css";
import Login from "./Login";
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
            {/* <img
              className="Logo"
              alt="logo"
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2F1000logos.net%2Fmcafee-logo%2F&psig=AOvVaw0g_0KaOQDc1gkCzlylc5Za&ust=1634295704501000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCJjqsYngyfMCFQAAAAAdAAAAABAD"
            /> */}
            <div className="Heading">McAfee</div>
            <div className="Intro">Sign in to your McAfee account</div>
            <div className="IntroSubHeading">
              Enter your email address so we can find your account.
            </div>
          </div>
          <hr className="hr"></hr>
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
