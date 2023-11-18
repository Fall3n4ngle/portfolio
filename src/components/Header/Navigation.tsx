import { navigation } from "@/lib/const";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="rounded-3xl bg-bg-secondary px-2.5 py-1.5">
      <ul className="flex items-center gap-2 ">
        {navigation.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="inline-block rounded-3xl px-3 py-1 transition-all hover:bg-bg-primary"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
