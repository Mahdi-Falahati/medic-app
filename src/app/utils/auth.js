import { hash, compare, genSalt } from "bcryptjs";
import { verify } from "jsonwebtoken";

async function HashPhone(phone) {
  const salt = await genSalt(11);
  const hashedPhone = await hash(phone, salt);
  return hashedPhone;
}

async function verifyPhone(phone, hashPhone) {
  const isValid = await compare(phone, hashPhone);
  return isValid;
}

const validateEmail = (email) => {
  const isValid =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  return isValid;
};

const validatePhoneNumber = (phone) => {
  const regex = new RegExp("^(\\+98|0)?9\\d{9}$");
  const result = regex.test(phone);
  return result;
};

const isNumeric = (str) => {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
};

const VerifyToken = (token, secretKey) => {
  try {
    return verify(token, secretKey);
  } catch (error) {
    return false;
  }
};

export {
  HashPhone,
  verifyPhone,
  validateEmail,
  isNumeric,
  validatePhoneNumber,
  VerifyToken,
};
