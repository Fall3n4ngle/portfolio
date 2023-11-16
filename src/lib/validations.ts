import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string({
      required_error: "Username is required",
    })
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  message: z.string({
    required_error: "Message is required",
  }).min(2, { message: "Message must be at least 2 characters." }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
