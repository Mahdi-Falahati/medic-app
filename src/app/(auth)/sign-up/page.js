import SignUpPage from "@/template/SignUpPage";
import { cookies } from "next/headers";
import { validationCookie } from "@/utils/validationCookie";
import { redirect } from "next/navigation";

export default async function SignUp() {
  const cookieStore = await cookies();
  const validation = await validationCookie(cookieStore);

  if (validation) redirect("/", "replace");

  return <SignUpPage />;
}
