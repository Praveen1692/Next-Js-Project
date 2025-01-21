import { resend } from "@/lib/resendEmail";
import VerificationEmail from "@/emails/VerificationEmails";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Next Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return { success: true, message: "veridication code send successfully" };
  } catch (emailError) {
    console.error("Error in send verification code:", emailError);
    return { success: false, message: "Failed to send verification code " };
  }
}
