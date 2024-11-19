import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  const { value } = cookieStore.get("token");
  console.log(value);
  return <div className="">q</div>;
}
