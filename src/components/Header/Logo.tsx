import { useActiveSection } from "@/providers";
import Link from "next/link";

export default function Logo() {
  const { scrollToSection } = useActiveSection();

  return (
    <h4 className="w-[125px]">
      <Link href="#home" onClick={() => scrollToSection("Home")}>
        Portfolio
      </Link>
    </h4>
  );
}
