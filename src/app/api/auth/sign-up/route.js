import { NextResponse } from "next/server";

import User from "@/models/User";
import { validatePhoneNumber } from "@/app/utils/auth";
import connectDB from "@/utils/connectDB";

export async function POST(req) {
  try {
    await connectDB();

    const { firstName, lastName, VCode, phone } = await req.json();

    if (!phone || !firstName || !lastName || !VCode) {
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

    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return NextResponse.json({
        error: "با این شماره قبلا ثبت نام کرده اید",
        status: 422,
      });
    }

    // Write condition for chechk Verification Code

    const user = await User.create({
      firstName,
      lastName,
      phone,
    });

    return NextResponse.json({
      message: "ثبت نام با موفقیت انجام شد",
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "مشکلی در سرور رخ داده است",
      status: 500,
    });
  }
}
