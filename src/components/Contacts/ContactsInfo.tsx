import { Mail, Phone, Github } from "lucide-react";

export default function ContactsInfo() {
  return (
    <div>
      <p className="lead mb-10 text-center sm:text-left">
        Feel free to reach out with any inquiries, collaborations, or projects!
        I&apos;m passionate about creating engaging web experiences and would
        love to connect with you.
      </p>
      <address className="flex flex-col items-center sm:items-start gap-5">
        <a
          href="https://github.com/Fall3n4ngle"
          className="flex items-center gap-4"
        >
          <div className="flex items-center justify-center rounded-full bg-bg-secondary p-3">
            <Github className="h-6 w-6" />
          </div>
          https://github.com/Fall3n4ngle
        </a>
        <a
          href="mailto:sashaoliyar7@gmail.com"
          className="flex items-center gap-4"
        >
          <div className="flex items-center justify-center rounded-full bg-bg-secondary p-3">
            <Mail className="h-6 w-6" />
          </div>
          sashaoliyar7@gmail.com
        </a>
        <a href="tel:+380980253732" className="flex items-center gap-4">
          <div className="flex items-center justify-center rounded-full bg-bg-secondary p-3">
            <Phone className="h-6 w-6" />
          </div>
          +38 (098) 025 3732
        </a>
      </address>
    </div>
  );
}
