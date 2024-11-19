import { cookies } from "next/headers";
import { validationCookie } from "@/utils/validationCookie";
import { NextResponse } from "next/server";

export async function GET(req) {
  const cookieStore = cookies();
  const validation = validationCookie(cookieStore);

  if (!validation) {
    return NextResponse.json({
      error: "شما اجازه دسترسی به این صفحه را ندارید",
      status: 401,
    });
  } else {
    return NextResponse.json({
      message: "شما به این صفحه دسترسی دارید",
      status: 200,
    });
  }
}
