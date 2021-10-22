import React, { useContext, useState } from "react";
import { AccountContext } from "../providers/AccountContext";
import Rules from "../utils/Rules";
import {
  PasswordLengthWise,
  AlphaNumericCheck,
  SpecialCharacterPolicy,
  IdenticalCharacters,
} from "../validator/PasswordValidator";

export default function LoginContainer(props) {
  const { loginWithPassword, otpLogin, otpStart, tenantClient } =
    useContext(AccountContext);

  const [passwordRules, setPasswordRules] = useState(null);
  const [PasswordPolicyState, setPasswordPolicyState] = useState({
    No_more_than_2_identical_characters_in_a_row: false,
    Special_characters: false,
    Lower_case_Upper_Case_Numbers: false,
    Length_Check: false,
    Non_empty_Password_Required: false,
  });
  const [LoginForm, setLoginForm] = useState({
    email: "",
    password: "",
    otp: "",
    otpAvailable: false,
    isSubmitting: false,
  });
  const [LoginError, setLoginError] = useState({
    email: "",
    isEmailError: "",
    databaseError: "",
  });
  const [switchLogin, setToggle] = useState(false);

  const [Continue, setContinue] = useState(false);

  const onToggle = () => {
    setToggle(!switchLogin);
    setLoginError({
      ...LoginError,
      email: "",
      databaseError: "",
    });
  };
  const onPressContinue = () => {
    setContinue(true);
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const onBlur = (e) => {
    switch (e.target.name) {
      case "email":
        if (!e.target.value) {
          setLoginError({
            ...LoginError,
            isEmailError: true,
            [e.target.name]: "Email is required",
          });
        } else if (e.target.value && !validateEmail(e.target.value)) {
          setLoginError({
            ...LoginError,
            isEmailError: true,
            [e.target.name]: "Email is not valid",
          });
        } else {
          setLoginError({
            ...LoginError,
            isEmailError: false,
            [e.target.name]: "",
          });
        }
        break;
      default:
        break;
    }
  };
  const validatePassword = (rules, value) => {
    console.log("password---->", value);
    console.log("length--------->", value.length);
    const copyObj = {
      ...PasswordPolicyState,
    };
    const alphaNumericPolicy = AlphaNumericCheck();
    const lengthPolicy =
      rules.passwordPolicy !== "none"
        ? PasswordLengthWise(rules?.password_complexity_options?.min_length)
        : null;
    const specialCharacterPolicy = SpecialCharacterPolicy();
    const identicalLessThan2Characters = IdenticalCharacters();

    switch (rules.passwordPolicy) {
      case "excellent":
        if (value !== "") {
          copyObj.Non_empty_Password_Required = true;
        } else {
          copyObj.Non_empty_Password_Required = false;
        }
        if (identicalLessThan2Characters.check(value)) {
          copyObj.No_more_than_2_identical_characters_in_a_row = true;
        } else {
          copyObj.No_more_than_2_identical_characters_in_a_row = false;
        }
        if (lengthPolicy.check(value)) {
          copyObj.Length_Check = true;
        } else {
          copyObj.Length_Check = false;
        }
        if (specialCharacterPolicy.check(value)) {
          copyObj.Special_characters = true;
        } else {
          copyObj.Special_characters = false;
        }

        if (alphaNumericPolicy.check(value)) {
          copyObj.Lower_case_Upper_Case_Numbers = true;
        } else {
          copyObj.Lower_case_Upper_Case_Numbers = false;
        }
        break;
      case "good":
        if (value !== "") {
          copyObj.Non_empty_Password_Required = true;
        } else {
          copyObj.Non_empty_Password_Required = false;
        }
        if (lengthPolicy.check(value)) {
          console.log("getting inside this");

          copyObj.Length_Check = true;
        } else {
          copyObj.Length_Check = false;
        }
        if (specialCharacterPolicy.check(value)) {
          copyObj.Special_characters = true;
        } else {
          copyObj.Special_characters = false;
        }
        if (alphaNumericPolicy.check(value)) {
          copyObj.Lower_case_Upper_Case_Numbers = true;
        } else {
          copyObj.Lower_case_Upper_Case_Numbers = false;
        }
        break;
      case "fair":
        if (value !== "") {
          copyObj.Non_empty_Password_Required = true;
        } else {
          copyObj.Non_empty_Password_Required = false;
        }
        if (lengthPolicy.check(value)) {
          console.log("getting inside this");

          copyObj.Length_Check = true;
        } else {
          copyObj.Length_Check = false;
        }
        if (alphaNumericPolicy.check(value)) {
          copyObj.Lower_case_Upper_Case_Numbers = true;
        } else {
          copyObj.Lower_case_Upper_Case_Numbers = false;
        }
        break;
      case "low":
        if (value !== "") {
          copyObj.Non_empty_Password_Required = true;
        } else {
          copyObj.Non_empty_Password_Required = false;
        }
        if (lengthPolicy.check(value)) {
          console.log("getting inside this");

          copyObj.Length_Check = true;
        } else {
          copyObj.Length_Check = false;
        }
        break;
      default:
        break;
    }
    setPasswordPolicyState(copyObj);
  };
  const onClick = (e) => {
    console.log(tenantClient[0]);
    setPasswordRules(tenantClient[0]);
  };

  const onChange = async (e) => {
    if (e.target.name === "password" && passwordRules) {
      validatePassword(passwordRules, e.target.value);
    }
    setLoginForm({
      ...LoginForm,
      [e.target.name]: e.target.value,
    });
    onBlur(e);
  };
  const trackClickEvent = async (navElement) => {
    let utag_data = window.utag_data;

    let utag = window.utag;

    let utagdata = { ...utag_data };

    utagdata["tm_global_tealium_calltype"] = "manual";

    utagdata["tm_global_navigation_element"] = navElement;

    utagdata["tm_global_navigation_element_click"] = "true";

    utag.link(utagdata);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    trackClickEvent(e);
    if (!switchLogin) {
      try {
        const res = await loginWithPassword(
          LoginForm.email,
          LoginForm.password
        );
        setLoginError({
          ...LoginError,
          databaseError: "",
        });
        console.log(res);
      } catch (err) {
        console.log(err);
        setLoginError({
          ...LoginError,
          databaseError: err.description,
        });
      }
    } else {
      try {
        if (LoginForm.otpAvailable) {
          const res = await otpLogin(LoginForm.email, LoginForm.otp);
          console.log("---------->", LoginForm.email, LoginForm.otp);
          console.log(res, "ankit");
          // } else {
          //   const res = await otpStart(LoginForm.email);
          //   console.log("enter here", res);
          //   setLoginForm({
          //     ...LoginForm,
          //     otpAvailable: true,
          //   });
        }
      } catch (err) {
        console.log(err);
        setLoginError({
          ...LoginError,
          databaseError: err.description,
        });
      }
    }
  };
  const getOtp = async () => {
    try {
      setToggle(!switchLogin);
      const res = await otpStart(LoginForm.email);
      console.log("enter here", res);
      setLoginForm({
        ...LoginForm,
        otpAvailable: true,
      });
    } catch (err) {
      console.log(err);
      setLoginError({
        ...LoginError,
        databaseError: err.description,
      });
    }
  };

  const child = React.Children.only(props.children);
  return React.cloneElement(child, {
    onChange,
    onToggle,
    switchLogin,
    onSubmit,
    LoginForm,
    LoginError,
    Continue,
    onPressContinue,
    getOtp,
    onClick,
    passwordRules,
    PasswordPolicyState,
  });
}
