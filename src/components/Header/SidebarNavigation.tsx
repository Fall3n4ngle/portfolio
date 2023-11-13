import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui";
import { navigation } from "@/lib/const";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function SidebarNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent className="flex w-full items-center justify-center bg-bg-secondary min-[440px]:max-w-[384px]">
        <nav>
          <ul className="flex flex-col items-center gap-3">
            {navigation.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>
                  <SheetClose className="inline-block rounded-3xl px-5 py-2 text-lg transition-all hover:bg-bg-primary">
                    {label}
                  </SheetClose>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
