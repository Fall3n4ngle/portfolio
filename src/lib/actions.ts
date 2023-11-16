"use server";

import ContactFormEmail from "@/email/ContactFormEmail";
import { resend } from "./resend";
import { ContactFormSchema, contactFormSchema } from "./validations";

export const sendEmail = async (data: ContactFormSchema) => {
  const result = contactFormSchema.safeParse(data);

  if (result.success) {
    const { email, message, name } = result.data;

    const { data, error } = await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>",
      to: "sashaoliyar@gmail.com",
      subject: "Message from contact form",
      reply_to: email,
      text: message,
      react: ContactFormEmail({ name, email, message }),
    });

    if (error) {
      return { success: false, error };
    }

    return { success: true, data };
  }

  if (!result.success) {
    return { success: false, error: result.error.format() };
  }
};
