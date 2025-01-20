import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 character")
  .max(20, "Username is not longer than 20 character")
  // Add more validation rules as needed
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Username must not have contain special character"
  );


  export const signUpSchema=z.object({
    username: usernameValidation,
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 character"),
    

  })