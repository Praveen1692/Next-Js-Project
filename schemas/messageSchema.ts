import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, "Content must be atleast 10 character")
    .max(300, "Not more than 300 character"),
});
