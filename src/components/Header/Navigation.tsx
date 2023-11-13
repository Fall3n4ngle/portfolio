import { navigation } from "@/lib/const";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-bg-secondary rounded-3xl px-2.5 py-1.5">
      <ul className="flex items-center gap-2 ">
        {navigation.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="hover:bg-bg-primary inline-block rounded-3xl px-3 py-1 transition-all"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
