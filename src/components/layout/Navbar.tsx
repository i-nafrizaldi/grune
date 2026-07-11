// import Image from "next/image";
// import React from "react";
// import logo1 from "../../../public/asset/6-Photoroom.png";
// import { Menu } from "lucide-react";

// const Navbar = () => {
//   return (
//     <div className="sticky top-0 z-50 bg-white">
//       <div className="md:w-7xl flex flex-row justify-between mx-auto p-4 py-6">
//         <div className="relative  h-8 w-32 ">
//           <Image alt="" src={logo1} fill className="object-contain" />
//         </div>
//         <div className="content-center">
//           <Menu className="text-gruneGreen font-bold md:hidden" />
//           <div className="hidden md:block">
//             <div className="flex flex-row gap-14 font-bold font-sans text-md">
//               <div className="cursor-pointer hover:text-gruneGreen">Home</div>
//               <div className="cursor-pointer hover:text-gruneGreen">
//                 Our Story
//               </div>
//               <div className="cursor-pointer hover:text-gruneGreen">Menu</div>
//               <div className="cursor-pointer hover:text-gruneGreen">
//                 About Us
//               </div>
//               <div className="cursor-pointer hover:text-gruneGreen">
//                 News Room
//               </div>
//               <div className="cursor-pointer hover:text-gruneGreen">
//                 Contact
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex min-h-20 items-center justify-between gap-6">
          <Link
            href="/"
            onClick={closeMenu}
            aria-label={`${siteConfig.name} homepage`}
            className="relative block h-10 w-32 shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gruneGreen"
          >
            <Image
              src="/asset/6-Photoroom.png"
              alt={`${siteConfig.name} logo`}
              fill
              priority
              sizes="128px"
              className="object-contain object-left"
            />
          </Link>

          <ul className="hidden items-center gap-8 text-sm font-bold lg:flex">
            {siteConfig.navigation.map((item) => (
              <li key={`${item.label}-${item.href}`}>
                <Link
                  href={item.href}
                  className="rounded-sm text-zinc-800 transition-colors hover:text-gruneGreen focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gruneGreen"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex size-11 items-center justify-center rounded-lg text-gruneGreen transition-colors hover:bg-gruneGreen/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gruneGreen lg:hidden"
          >
            {isMenuOpen ? (
              <X className="size-6" strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu className="size-6" strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={
            isMenuOpen ? "border-t border-zinc-200 py-4 lg:hidden" : "hidden"
          }
        >
          <ul className="flex flex-col gap-1">
            {siteConfig.navigation.map((item) => (
              <li key={`mobile-${item.label}-${item.href}`}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-zinc-800 transition-colors hover:bg-gruneGreen/10 hover:text-gruneGreen focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gruneGreen"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
