import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailers";
import bcrypt from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password, token } = reqBody;

    console.log(reqBody);

    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 404 }
      );
    }

    if (token !== user.forgotPasswordToken) {
      return NextResponse.json({ error: "Invalid Token" }, { status: 400 });
    }

    if (user.forgotPasswordTokenExpiry < Date.now()) {
      return NextResponse.json({ error: "Token has expired" }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    user.password = hashPassword;

    await user.save();

    return NextResponse.json({
      message: "Password updated successfully",
      success: true,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
}
