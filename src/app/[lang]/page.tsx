import { Contacts, Hero, Projects, Skills } from "@/components";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
}
