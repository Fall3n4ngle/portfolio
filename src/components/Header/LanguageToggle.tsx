"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import { Globe } from "lucide-react";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n-config";
import Link from "next/link";
import { localeLabels } from "@/lib/const";

export default function LanguageToggle() {
  const pathName = usePathname();
  const currentLang = pathName.split("/")[1];

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center rounded-md p-2 transition-all">
          <Globe className="mr-1.5 h-4 w-4 text-text-secondary" />
          <span className="text-lg">{currentLang}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Pick a language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {i18n.locales.map((locale) => (
          <DropdownMenuItem key={locale} className="p-0">
            <Link
              href={redirectedPathName(locale)}
              className="w-full px-2 py-1.5"
            >
              {localeLabels[locale]} ({locale})
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
