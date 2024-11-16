import Menu from "@/module/Menu";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

export default async function Header() {
  return (
    <header className="flex p-4 mb-10 justify-between font-semibold rounded-b-md">
      <Menu />
      <Link
        href="/sign-in"
        className=" flex items-center hover:scale-105 justify-center bg-white border border-green-600 border-solid text-green-600 rounded-lg py-3 px-4"
      >
        <FiLogIn className="ml-2" />
        <span className="tracking-widest">ورود / ثبت نام</span>
      </Link>
    </header>
  );
}
