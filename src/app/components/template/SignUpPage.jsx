"use client";

import { useForm } from "react-hook-form";
import CustomInput from "../elements/CustomInput";
import { FaSignInAlt } from "react-icons/fa";
import { validatePhoneNumber } from "@/app/utils/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import VCode from "@/module/VCode";
import { useState } from "react";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { firstName, lastName, phone } = data;

    if (!validatePhoneNumber(phone)) {
      return setError("phone", {
        type: "custom",
        message: "شماره همراه معتبر وارد کنید",
      });
    } else {
      const res = await fetch("api/auth/sign-up", {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify({ firstName, lastName, phone, VCode: 123 }),
      });

      const message = await res.json();
      if (message.status === 201) {
        router.replace("/sign-in");
      } else {
        toast.error(message.error);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 w-[360px] min-h-[400px] shadow-md shadow-slate-400 rounded-md flex flex-col justify-between items-center"
      >
        <h1 className="text-2xl">ثبت نام</h1>
        <div className="my-3 w-full">
          <CustomInput
            placeholder="نام خود را وارد کنید"
            type="text"
            title="نام"
            name="firstName"
            required="نام نمیتواند خالی باشد"
            error={errors?.firstName?.message}
            register={register}
          />
          <CustomInput
            placeholder="نام خانوادگی خود را وارد کنید"
            type="text"
            title="نام خانوادگی"
            name="lastName"
            required="نام خانوادگی نمیتواند خالی باشد"
            error={errors?.lastName?.message}
            register={register}
          />
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
        {isLoading ? (
          <span className="loading loading-ring loading-lg"></span>
        ) : (
          <button
            className="hover:text-white text-gray-600 mt-5 flex justify-center items-center w-[250px] border border-solid hover:bg-green-600 border-green-600 py-1 rounded-md text-xl"
            type="submit"
          >
            <FaSignInAlt className="ml-2" />
            ثبت نام
          </button>
        )}
        <div></div>
        <div className="mb-3 mt-6">
          <span>حساب دارم</span>
          <Link
            href="/sign-in"
            className="mx-2 rounded-md hover:text-green-600 hover:bg-white hover:underline bg-green-600 text-white px-2 py-1"
          >
            ورود
          </Link>
        </div>
      </form>
      <ToastContainer position="top-center" limit={1} rtl={true} />
    </div>
  );
}
