import { cookies } from "next/headers";
import { validationCookie } from "@/utils/validationCookie";

export default function Home() {
  const cookieStore = cookies();
  const validation = validationCookie(cookieStore);

  return <div className="">q</div>;
}
