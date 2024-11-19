import SignUpPage from "@/template/SignUpPage";
import { cookies } from "next/headers";
import { validationCookie } from "@/utils/validationCookie";
import { redirect } from "next/navigation";

export default function SignUp() {
  const cookieStore = cookies();
  const validation = validationCookie(cookieStore);

  if (validation) redirect("/", "replace");

  return <SignUpPage />;
}
