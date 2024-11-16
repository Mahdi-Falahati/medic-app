import { NextResponse } from "next/server";

import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { validatePhoneNumber } from "@/app/utils/auth";

export async function POST(req) {
  try {
    await connectDB();

    const { verificationCode, password, phone } = await req.json();

    if (!verificationCode || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 422 }
      );
    }

    // Write condition for chechk Verification Code

    if (!validatePhoneNumber(phone)) {
      return NextResponse.json(
        { error: "لطفا شماره همراه معتبر وارد کنید" },
        { status: 422 }
      );
    }

    const user = await User.findOne({ phone });
    if (!user) {
      return NextResponse.json(
        { error: "همچین حساب کاربری وجود نداره" },
        { status: 422 }
      );
    }

    const hashed = await hashPassword(password);
    user.password = hashed;
    user.save();

    return NextResponse.json(
      { message: "پسورد با موفقیت ثبت شد" },
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
