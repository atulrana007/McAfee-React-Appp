import React from "react";
import "./style.css";
import { AiOutlineMail } from "react-icons/ai";

const Signup = (props) => {
  const { onSubmit, SignupForm, onChange } = props;
  return (
    <div>
      <form className="InputWrapper">
        <>
          <div className="InputLabel">Email</div>
          <div
            className="InputAndLogo"
            // style={{
            //   border:
            //     LoginError.isEmailError === true
            //       ? "2px solid red"
            //       : LoginError.isEmailError === false
            //       ? "2px solid green"
            //       : "",
            // }}
          >
            <AiOutlineMail
              style={{
                height: "2rem",
                width: "2rem",
                "margin-top": "0.5rem",
                color: "rgb(175, 174, 174)",
              }}
            />
            <input
              type="email"
              id="email"
              name="email"
              value={SignupForm.email}
              placeholder="Email"
              className="Input"
              onChange={onChange}
            />
          </div>
          <div className="InputLabel">Email</div>
          <div
            className="InputAndLogo"
            // style={{
            //   border:
            //     LoginError.isEmailError === true
            //       ? "2px solid red"
            //       : LoginError.isEmailError === false
            //       ? "2px solid green"
            //       : "",
            // }}
          >
            <AiOutlineMail
              style={{
                height: "2rem",
                width: "2rem",
                "margin-top": "0.5rem",
                color: "rgb(175, 174, 174)",
              }}
            />
            <input
              type="password"
              id="password"
              name="password"
              value={SignupForm.password}
              placeholder="Password"
              className="Input"
              onChange={onChange}
            />
          </div>
          <div className="InputLabel">Email</div>
          <div
            className="InputAndLogo"
            // style={{
            //   border:
            //     LoginError.isEmailError === true
            //       ? "2px solid red"
            //       : LoginError.isEmailError === false
            //       ? "2px solid green"
            //       : "",
            // }}
          >
            <AiOutlineMail
              style={{
                height: "2rem",
                width: "2rem",
                "margin-top": "0.5rem",
                color: "rgb(175, 174, 174)",
              }}
            />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={SignupForm.confirmPassword}
              placeholder="confirmPassword"
              className="Input"
              onChange={onChange}
            />
          </div>
          <button className="RequestOtp" onClick={onSubmit}>
            {/* {!switchLogin ? (
              <div>Login</div>
            ) : LoginForm.otpAvailable ? (
              <div>Sign in</div>
            ) : (
              <div>Request one-time passcode</div>
            )} */}
            <div>Sign Up</div>
          </button>
        </>
      </form>
    </div>
  );
};

export default Signup;
