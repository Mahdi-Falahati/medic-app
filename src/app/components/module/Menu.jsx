"use client";

import Link from "next/link";
import { useState } from "react";

import { FiAlignRight } from "react-icons/fi";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ul className="hidden md:flex items-center justify-between min-w-[500px] text-green-600">
        <li className="hover:scale-110">
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li className="hover:scale-110 my-4">
          <Link href="/">آرایشی بهداشتی</Link>
        </li>
        <li className="hover:scale-110 my-4">
          <Link href="/">داروهای گیاهی</Link>
        </li>
        <li className="hover:scale-110 my-4">
          <Link href="/">مکمل ها</Link>
        </li>
        <li className="hover:scale-110 my-4">
          <Link href="/">پزشکان</Link>
        </li>
      </ul>
      <button onClick={() => setOpen(!open)} className="flex md:hidden">
        <FiAlignRight className="text-4xl text-green-600" />
      </button>
      {open && (
        <div className="absolute top-20 bg-green-600 rounded-b-lg z-20">
          <ul className="md:hidden flex flex-col items-center justify-between min-w-[200px] text-white">
            <li className="hover:scale-110 my-4">
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li className="hover:scale-110 my-4">
              <Link href="/">آرایشی بهداشتی</Link>
            </li>
            <li className="hover:scale-110 my-4">
              <Link href="/">داروهای گیاهی</Link>
            </li>
            <li className="hover:scale-110 my-4">
              <Link href="/">مکمل ها</Link>
            </li>
            <li className="hover:scale-110 my-4">
              <Link href="/">پزشکان</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
