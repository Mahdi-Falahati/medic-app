"use client";

import Menu from "@/module/Menu";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    fetch("api/user")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
        setLoading(false);
      });
  }, [pathname]);

  return (
    <header className="flex p-4 mb-10 justify-between font-semibold rounded-b-md">
      <Menu />
      {loading ? (
        <span className="loading loading-spinner text-success"></span>
      ) : !isAuthenticated ? (
        <Link
          href="/sign-in"
          className=" flex items-center hover:scale-105 justify-center bg-white border border-green-600 border-solid text-green-600 rounded-lg py-3 px-4"
        >
          <FiLogIn className="ml-2" />
          <span className="tracking-widest">ورود / ثبت نام</span>
        </Link>
      ) : (
        <Link
          href="/dashboard"
          className=" flex items-center hover:scale-105 justify-center bg-white border border-green-600 border-solid text-green-600 rounded-lg py-2 px-4"
        >
          <FaRegUser className="text-xl" />
        </Link>
      )}
    </header>
  );
}
