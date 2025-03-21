"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Hire Us" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex text-[#78706F] gap-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`capitalize font-bold transition-all  ${
            link.href === pathname
              ? " border-b-2 border-[#DBA56D]"
              : "hover:text-[#DBA56D]"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
