/** @format */

import { z } from "zod";
export const registerSchema = z.object({
  fullname: z.string().min(1, "Fullname is required"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});
