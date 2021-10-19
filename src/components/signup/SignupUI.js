import React from "react";
import Signup from "./Signup";
import "./style.css";

const SignupUI = (props) => {
  const { onSubmit, SignupForm, onChange } = props;
  return (
    <>
      <div className="SignupWrapper">
        <div className="leftContainer">
          <div className="Heading">McAfee</div>
          <div className="Intro">Create your McAfee account</div>
          <div className="IntroSubHeading">
            <div className="Intro">Step 1</div>
            <div className="Points">
              Enter your email address so we can find your account.
            </div>
          </div>
          <div className="IntroSubHeading">
            <div className="Intro">Step 2</div>
            <div className="Points">
              Set a password and we’ll create your account.
            </div>
          </div>
        </div>
        <div className="RightContainer">
          <Signup
            onChange={onChange}
            onSubmit={onSubmit}
            SignupForm={SignupForm}
          ></Signup>
        </div>
      </div>
    </>
  );
};

export default SignupUI;
