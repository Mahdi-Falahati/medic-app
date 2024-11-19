import { VerifyToken } from "./auth";

const validationCookie = async (cookieStore) => {
  const cookies = await cookieStore;
  const token = await cookies.get("token");
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
