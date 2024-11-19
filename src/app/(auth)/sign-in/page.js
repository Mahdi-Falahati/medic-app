import SignInPage from "@/template/SignInPage";
import { cookies } from "next/headers";
import { validationCookie } from "@/utils/validationCookie";
import { redirect } from "next/navigation";

export default function SignIn() {
  const cookieStore = cookies();
  const validation = validationCookie(cookieStore);

  if (validation) redirect("/", "replace");

  return <SignInPage />;
}
