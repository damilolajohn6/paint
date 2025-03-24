"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Hire Us" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Mobile Menu Trigger */}
      <SheetTrigger asChild>
        <Button
          className="bg-[#78706F] hover:bg-[#3f3b3a] p-2 rounded-md"
          onClick={() => setOpen(true)}
        >
          <CiMenuFries className="text-[36px] text-white" />
        </Button>
      </SheetTrigger>

      {/* Mobile Menu Content */}
      <SheetContent
        side="right"
        className="flex flex-col bg-[#F5F0E8] p-6 shadow-lg h-full"
      >
        {/* Navigation Links */}
        <nav className="flex flex-col text-[#78706F] gap-6 py-16">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`capitalize font-bold transition-all  ${
                link.href === pathname
                  ? " border-b-2 pb-1 border-[#DBA56D]"
                  : "hover:text-[#DBA56D]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
