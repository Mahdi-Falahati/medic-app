import { hash, compare, genSalt } from "bcryptjs";

async function hashPassword(password) {
  const salt = await genSalt(11);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
}

async function verifyPassword(password, hashPassword) {
  const isValid = await compare(password, hashPassword);
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
  const result = regex.test("+989031234567");

  return result;
};

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

export {
  hashPassword,
  verifyPassword,
  validateEmail,
  isNumeric,
  validatePhoneNumber,
};
