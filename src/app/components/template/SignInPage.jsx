"use client";

import { useForm } from "react-hook-form";
import CustomInput from "../elements/CustomInput";
import { validatePhoneNumber } from "@/app/utils/auth";
import Link from "next/link";
import { IoMdLogIn } from "react-icons/io";
import { useRouter } from "next/navigation";
import VCode from "../module/VCode";

export default function SignInPage() {
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    const { phone } = data;
    if (!validatePhoneNumber(phone)) {
      setError("phone", {
        type: "custom",
        message: "شماره همراه معتبر وارد کنید",
      });
    } else {
      const req = await fetch("api/auth/sign-in", {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify({ phone, VCode: 123 }),
      });
      const res = await req.json();

      if (res?.status === 200) {
        router.replace("/");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 w-[360px] min-h-[400px] shadow-md shadow-slate-400 rounded-md flex flex-col justify-between items-center"
      >
        <h1 className="text-2xl">ورود</h1>
        <div className="my-3 w-full">
          <CustomInput
            placeholder="شماره همراه خود را وارد کنید"
            type="text"
            title="شماره همراه"
            name="phone"
            required="شماره همراه نمیتواند خالی باشد"
            error={errors?.phone?.message}
            register={register}
          />
          <VCode />
        </div>

        <button
          className="hover:text-white text-gray-600 mt-5 flex justify-center items-center w-[250px] border border-solid hover:bg-green-600 border-green-600 py-1 rounded-md text-xl"
          type="submit"
        >
          <IoMdLogIn className="ml-2" />
          ورود
        </button>
        <div className="mb-3 mt-6">
          <span>حساب ندارم</span>
          <Link
            href="/sign-up"
            className="rounded-md hover:text-green-600 hover:bg-white hover:underline bg-green-600 text-white px-2 py-1 mx-2"
          >
            ساخت حساب
          </Link>
        </div>
      </form>
    </div>
  );
}
