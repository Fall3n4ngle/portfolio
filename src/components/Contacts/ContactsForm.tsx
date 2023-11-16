"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@/components/ui";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/useToast";
import ContactFormMessage from "./ContactFormMessage";
import { sendEmail } from "@/lib/actions";
import { ContactFormSchema, contactFormSchema } from "@/lib/validations";

export default function ContactsForm() {
  const { toast } = useToast();

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const onSubmit = async (data: ContactFormSchema) => {
    const result = await sendEmail(data);

    if (result?.success) {
      toast({
        description: (
          <ContactFormMessage type="success" message="Your message was sent" />
        ),
      });

      form.reset();
      return;
    }

    toast({
      description: (
        <ContactFormMessage type="error" message="Something went wrong" />
      ),
    });
  };

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <FormItem className="flex-col-reverse">
              <FormMessage />
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormLabel>
                Username <span className={cn(error && "text-error")}>*</span>
              </FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <FormItem className="flex-col-reverse">
              <FormMessage />
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormLabel>
                Email <span className={cn(error && "text-error")}>*</span>
              </FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState: { error } }) => (
            <FormItem className="flex-col-reverse">
              <FormMessage />
              <FormControl>
                <Textarea {...field} rows={5} />
              </FormControl>
              <FormLabel>
                Message <span className={cn(error && "text-error")}>*</span>
              </FormLabel>
            </FormItem>
          )}
        />
        <Button className="self-start" disabled={isSubmitting}>
          Send{" "}
          {isSubmitting ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
        </Button>
      </form>
    </Form>
  );
}
