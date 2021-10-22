import React, { useState } from "react";
import "./style.css";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import Rules from "../../utils/Rules";

const Login = (props) => {
  const {
    onChange,
    switchLogin,
    onSubmit,
    LoginError,
    LoginForm,
    onToggle,
    Continue,
    onPressContinue,
    getOtp,
    trackClickEvent,
    onClick,
    passwordRules,
    PasswordPolicyState,
  } = props;
  const [displayRules, setDisplayRules] = useState(false);
  const ruleMap =
    passwordRules &&
    Rules({ count: passwordRules?.password_complexity_options?.min_length });
  const displayablerule = [];
  const getKeys = [];
  if (passwordRules?.passwordPolicy === "good") {
    for (const key of Object.keys(PasswordPolicyState)) {
      if (key !== "No_more_than_2_identical_characters_in_a_row") {
        getKeys.push(key);
        displayablerule.push(ruleMap[key]);
      }
    }
  } else if (passwordRules?.passwordPolicy === "excellent") {
    for (const key of Object.keys(PasswordPolicyState)) {
      getKeys.push(key);
      displayablerule.push(ruleMap[key]);
    }
  } else if (passwordRules?.passwordPolicy === "fair") {
    for (const key of Object.keys(PasswordPolicyState)) {
      if (
        key !== "No_more_than_2_identical_characters_in_a_row" ||
        key !== "Special_characters"
      ) {
        getKeys.push(key);
        displayablerule.push(ruleMap[key]);
      }
    }
  } else if (passwordRules?.passwordPolicy === "low") {
    for (const key of Object.keys(PasswordPolicyState)) {
      if (
        key !== "No_more_than_2_identical_characters_in_a_row" ||
        key !== "Special_characters" ||
        key !== "Lower_case_Upper_Case_Numbers"
      ) {
        getKeys.push(key);
        displayablerule.push(ruleMap[key]);
      }
    }
  } else if (passwordRules?.passwordPolicy === "none") {
    for (const key of Object.keys(PasswordPolicyState)) {
      if (
        key !== "No_more_than_2_identical_characters_in_a_row" ||
        key !== "Special_characters" ||
        key !== "Lower_case_Upper_Case_Numbers" ||
        key !== "Length_Check"
      ) {
        getKeys.push(key);
        displayablerule.push(ruleMap[key]);
      }
    }
  }
  console.log("please check this", PasswordPolicyState.Length_Check);
  return (
    <div className="LoginWrapperContainer">
      <form className="InputWrapper">
        {!switchLogin && (
          <>
            {LoginForm.email !== "" ? (
              <div className="InputLabel">Email</div>
            ) : null}
            <div
              className="InputAndLogo"
              style={{
                border:
                  LoginError.isEmailError === true
                    ? "2px solid red"
                    : LoginError.isEmailError === false
                    ? "2px solid green"
                    : "",
              }}
            >
              <AiOutlineMail
                style={{
                  height: "2rem",
                  width: "2rem",
                  marginTop: "1rem",
                  color: "rgb(175, 174, 174)",
                }}
              />
              <input
                type="email"
                id="email"
                name="email"
                value={LoginForm.email}
                placeholder="Email"
                className="Input"
                onChange={onChange}
              />
            </div>
          </>
        )}
        {LoginError.email && <div className="Error">{LoginError.email}</div>}
        {!switchLogin && (
          <>
            {LoginForm.password !== "" ? (
              <div className="InputLabelPass">Password</div>
            ) : null}
            <div className="InputAndLogo">
              <MdLockOutline
                style={{
                  height: "2rem",
                  width: "2rem",
                  marginTop: "1rem",
                  color: "rgb(175, 174, 174)",
                }}
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="Input"
                onChange={onChange}
                onFocus={() => {
                  onClick();
                  setDisplayRules(true);
                }}
                onBlur={() => setDisplayRules(false)}
              />
            </div>
            {displayRules ? (
              <>
                <div className="Password-rules">
                  {displayablerule.map((item, index) => {
                    return (
                      <div className="Rule">
                        {" "}
                        <div className="checkbox">
                          {PasswordPolicyState[getKeys[index]] ? (
                            <TiTick className="tick" />
                          ) : (
                            <MdOutlineCancel className="cancel" />
                          )}
                        </div>
                        {item}
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              console.log("not going inside that")
            )}
          </>
        )}
        {switchLogin && LoginForm.otpAvailable && (
          <>
            <div className="InputLabel">one-time passcode</div>
            <div className="InputAndLogo">
              <input
                id="otp"
                name="otp"
                className="Input"
                onChange={onChange}
              />
            </div>
          </>
        )}
        <button className="RequestOtp" onClick={onSubmit}>
          {/* {!switchLogin ? (
              <div>Login</div>
            ) : LoginForm.otpAvailable ? (
              <div>Sign in</div>
            ) : (
              <div>Request one-time passcode</div>
            )} */}
          <div>Sign in</div>
        </button>
      </form>
      <div className="Error">{LoginError.databaseError}</div>

      <div className="SwitchContainer">
        <div className="Switch">OR</div>
        {/* <button className="SwitchBtn" onClick={onToggle}>
            {!switchLogin ? (
              <div>Sign in with a one-time passcode</div>
            ) : (
              <div>Sign in with a password</div>
            )}
          </button> */}
        {!switchLogin && (
          <button className="SwitchBtn" onClick={getOtp}>
            <div>Sign in with a one-time passcode</div>
          </button>
        )}
        {switchLogin && (
          <button className="SwitchBtn" onClick={onToggle}>
            <div>Sign in with password</div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
