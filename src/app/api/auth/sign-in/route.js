import { NextResponse } from "next/server";

import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { validatePhoneNumber } from "@/app/utils/auth";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    await connectDB();

    const { phone, VCode } = await req.json();

    if (!phone || !VCode) {
      return NextResponse.json({
        error: "لطفا اطلاعات معتبر وارد کنید",
        status: 422,
      });
    }

    if (!validatePhoneNumber(phone)) {
      return NextResponse.json({
        error: "لطفا شماره همراه معتبر وارد کنید",
        status: 422,
      });
    }

    const user = await User.findOne({ phone });
    if (!user) {
      return NextResponse.json({
        error: "این حساب کاربری وجود ندارد",
        status: 422,
      });
    }

    // Write condition for chechk Verification Code

    const expiretion = 24 * 60 * 60;
    const token = sign({ phone }, process.env.SECRET_KEY, {
      expiresIn: expiretion,
    });

    const cookieStore = await cookies();
    cookieStore.set({
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      maxAge: expiretion,
    });

    return NextResponse.json({
      message: `${user.firstName} - ${user.lastName} خوش آمدید`,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "مشکلی در سرور رخ داده است",
      status: 500,
    });
  }
}
