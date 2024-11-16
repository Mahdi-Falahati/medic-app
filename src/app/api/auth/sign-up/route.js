import { NextResponse } from "next/server";

import User from "@/models/User";
import { validateEmail } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { validatePhoneNumber } from "@/app/utils/auth";

export async function POST(req) {
  try {
    await connectDB();

    const { firstName, lastName, phone, email } = await req.json();

    if (!email || !firstName || !lastName) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 422 }
      );
    }

    if (!validatePhoneNumber(phone)) {
      return NextResponse.json(
        { error: "لطفا شماره همراه معتبر وارد کنید" },
        { status: 422 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "لطفا ایمیل معتبر وارد کنید" },
        { status: 422 }
      );
    }

    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return NextResponse.json(
        { error: "این حساب کاربری وجود دارد" },
        { status: 422 }
      );
    }

    const user = await User.create({
      firstName,
      lastName,
      phone,
      email,
    });
    return NextResponse.json(
      { message: "اطلاعات ذخیره شد برای  تایید حساب اقدام نمایید" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      {
        status: 500,
      }
    );
  }
}
