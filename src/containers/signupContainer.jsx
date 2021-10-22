import React, { useContext, useState } from "react";
import { AccountContext } from "../providers/AccountContext";
import {
  PasswordLengthWise,
  AlphaNumericCheck,
  SpecialCharacterPolicy,
  IdenticalCharacters,
} from "../validator/PasswordValidator";

export default function SignupContainer(props) {
  const { SignupWithPassword, loginWithPassword, tenantClient } =
    useContext(AccountContext);

  const [passwordRules, setPasswordRules] = useState(null);
  const [SignupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [PasswordPolicyState, setPasswordPolicyState] = useState({
    No_more_than_2_identical_characters_in_a_row: false,
    Special_characters: false,
    Lower_case_Upper_Case_Numbers: false,
    Length_Check: false,
    Non_empty_Password_Required: false,
  });

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

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      SignupForm.email !== "" &&
      SignupForm.password !== "" &&
      SignupForm.confirmPassword !== "" &&
      SignupForm.password === SignupForm.confirmPassword
    ) {
      try {
        const res = await SignupWithPassword(
          SignupForm.email,
          SignupForm.password
        );
        console.log(res);
        if (res.email) {
          const loginResponse = await loginWithPassword(
            SignupForm.email,
            SignupForm.password
          );
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("enter details");
    }
  };

  const onClick = (e) => {
    setPasswordRules(tenantClient[0]);
  };
  const onChange = (e) => {
    if (e.target.name === "password" && passwordRules) {
      validatePassword(passwordRules, e.target.value);
    }
    setSignupForm({
      ...SignupForm,
      [e.target.name]: e.target.value,
    });
  };

  const child = React.Children.only(props.children);
  return React.cloneElement(child, {
    onSubmit,
    SignupForm,
    onChange,
    onClick,
    passwordRules,
    PasswordPolicyState,
  });
}
