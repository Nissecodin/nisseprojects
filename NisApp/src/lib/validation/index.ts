import * as z from "zod"

export const SignupValidaton = z.object({
    name: z.string().min(2, {message: "To short"}),
    username: z.string().min(8, {message: "Username must be at least 8 characthers long"}),
    email: z.string().email(),
    password: z.string().min(8, {message: "Password must be at least 8 characthers long"}),
  })