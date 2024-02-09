"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Cart", href: "/cart" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background px-8 py-3 text-slate-800 backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-primary">
      <Link href="/">
        <h2 className="font-semibold text-xl flex flex-row">
          Stripe & NextJs{" "}
        </h2>
          <p className="font-light text-sm">(with Typescript)</p>
      </Link>

      <div className="flex gap-2 uppercase">
        {links.map((link, idx) => (
          <div key={idx}>
            {pathname === link.href ? (
              <Link className="hover:underline" href={link.href}>
                {link.name}
              </Link>
            ) : (
              <Link className="hover:underline text-slate-600" href={link.href}>
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}
