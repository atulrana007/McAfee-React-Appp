import React, { useState } from "react";
import "./style.css";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import Rules from "../../utils/Rules";
import { MdOutlineCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Signup = (props) => {
  const {
    onSubmit,
    SignupForm,
    onChange,
    passwordRules,
    PasswordPolicyState,
    onClick,
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
  return (
    <div className="formWrapper">
      <form className="InputWrapper">
        <>
          {SignupForm.email !== "" ? (
            <div className="InputLabel">Email</div>
          ) : null}
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
                marginTop: "0.7rem",
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
          {SignupForm.password !== "" ? (
            <div className="InputLabelPass">Password</div>
          ) : null}
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
            <MdLockOutline
              style={{
                height: "2rem",
                width: "2rem",
                marginTop: "0.7rem",
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
              onFocus={() => {
                onClick();
                setDisplayRules(true);
              }}
              onBlur={() => setDisplayRules(false)}
            />
            <AiFillEye
              style={{
                height: "2rem",
                width: "2rem",
                marginTop: "0.7rem",
                color: "rgb(175, 174, 174)",
              }}
            />
          </div>
          <div>
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
          </div>

          {SignupForm.confirmPassword !== "" ? (
            <div className="InputLabelCPass">Confirm Password</div>
          ) : null}
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
            <MdLockOutline
              style={{
                height: "2rem",
                width: "2rem",
                marginTop: "0.7rem",
                color: "rgb(175, 174, 174)",
              }}
            />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={SignupForm.confirmPassword}
              placeholder="Confirm Password"
              className="Input"
              onChange={onChange}
              onFocus={() => setDisplayRules(true)}
            />
            <AiFillEye
              style={{
                height: "2rem",
                width: "2rem",
                marginTop: "0.7rem",
                color: "rgb(175, 174, 174)",
              }}
            />
          </div>
          <div className="PolicyLink">
            By clicking Create my account, you accept{" "}
            <span style={{ color: "rgb(66, 88, 255)" }}>
              McAfee’s License <br />
              Agreement
            </span>{" "}
            and
            <span style={{ color: "rgb(66, 88, 255)" }}> Privacy Notice</span>
          </div>
          <button
            className={
              SignupForm.email !== "" &&
              SignupForm.password !== "" &&
              SignupForm.confirmPassword !== ""
                ? "SubmitButtonActive"
                : "SubmitButton"
            }
            onClick={onSubmit}
          >
            <div>Create My Account</div>
          </button>
        </>
      </form>
    </div>
  );
};

export default Signup;
