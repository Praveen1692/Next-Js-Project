import { z } from "zod";

export const verifySchema = z.object({
  code:z.string().length(6,"Verificaton code muSt be 6 digit..")

});
