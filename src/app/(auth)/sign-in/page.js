import SignInPage from "@/template/SignInPage";
import { cookies } from "next/headers";
import { validationCookie } from "@/utils/validationCookie";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const cookieStore = await cookies();
  const validation = await validationCookie(cookieStore);

  if (validation) redirect("/", "replace");

  return <SignInPage />;
}
