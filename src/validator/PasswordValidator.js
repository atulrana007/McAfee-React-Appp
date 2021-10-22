import PasswordPolicy from "password-sheriff/lib/policy";
import identicalChars from "password-sheriff/lib/rules/identicalChars";
const assert = require("assert");
const charsets = require("password-sheriff").charsets;

const format = require("password-sheriff/lib/helper").format;

export const AlphaNumericCheck = () => {
  const alphaNumericPolicy = new PasswordPolicy({
    contains: {
      expressions: [charsets.upperCase, charsets.lowerCase, charsets.numbers],
    },
  });
  return alphaNumericPolicy;
};

export const PasswordLengthWise = (length) => {
  console.log("yrr please", length);
  const lengthPolicy = new PasswordPolicy({
    length: { minLength: length },
  });
  return lengthPolicy;
};

export const SpecialCharacterPolicy = () => {
  const specialCharacterPolicy = new PasswordPolicy({
    contains: {
      expressions: [charsets.specialCharacters],
    },
  });
  return specialCharacterPolicy;
};

export const IdenticalCharacters = () => {
  var identicalCharsPolicy = new PasswordPolicy({
    identicalChars: {
      max: 2,
    },
  });
  return identicalCharsPolicy;
};
