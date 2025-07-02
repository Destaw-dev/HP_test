"use client";

import React, { FC } from "react";
import { FaBars } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { navLinks } from "./navLinks";
import DecLogo from "./icons/DecLogo";
import MobileLogo from "./icons/MobileLogo";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
  hasDropdown?: boolean;
}

const NavBar: FC = () => {
  return (
    <nav>
      <div className="hidden lg:flex gap-2">
        <DecLogo />
        {navLinks.map((link: NavLink) => (
          <div key={link.label} className="flex items-center gap-2">
            <span>|</span>
            <Link href={link.href} className="flex items-center gap-1">
              {link.icon && <span>{link.icon}</span>}
              <span>{link.label}</span>
              {link.hasDropdown && (
                <FiChevronDown className="w-4 h-4 text-white" />
              )}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex lg:hidden gap-4">
        <FaBars className="w-8 h-8" />
        <div>
          <MobileLogo />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
