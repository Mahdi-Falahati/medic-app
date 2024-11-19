import { VerifyToken } from "./auth";

const validationCookie = (cookieStore) => {
  const token = cookieStore.get("token");
  if (!token) {
    return false;
  }
  const validation = VerifyToken(token.value, process.env.SECRET_KEY);

  if (!validation) {
    return false;
  } else {
    return true;
  }
};

export { validationCookie };
