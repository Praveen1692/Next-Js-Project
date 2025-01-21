import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await dbConnect();

  try {
   const {username,email,password}= await request.json();
   UserModel.findOne({
    username,
    isVerified: true,
   })












  } catch (error) {
    console.log("Error registering user", error);
    return Response.json(
      {
        success: false,
        message: "An error occurred while registering the user",
      },
      {
        status: 500,
      }
    );
  }
}
