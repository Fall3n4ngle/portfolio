import { Button } from "@/components/ui";
import { ArrowDown, ArrowDownToLine, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center gap-24 text-center">
      <div className="max-w-[750px]">
        <h3>Hi, I&apos;m Alex</h3>
        <h1 className="mb-5">I&apos;m a Frontend Developer</h1>
        <p className="lead mb-5">
          I specialize in building modern, responsive, fast, seo-friendly and
          accessible websites using react.js and next.js
        </p>
        <div className="flex flex-wrap-reverse items-center justify-center gap-3">
          <Button>
            Projects <ArrowDown className="h-6 w-6" />
          </Button>
          <Button variant="secondary">
            Download CV <ArrowDownToLine className="h-6 w-6" />
          </Button>

        </div>
      </div>
    </section>
  );
}
