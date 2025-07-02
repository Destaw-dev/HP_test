import { ReactNode } from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { PiBriefcaseLight } from "react-icons/pi";
import { HiOutlineDocumentText } from "react-icons/hi";

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  icon?: ReactNode;
}

export const navLinks: NavLink[] = [
  {
    label: "חיפוש",
    href: "#",
    hasDropdown: true,
    icon: <CiSearch className="text-xl" />,
  },
  {
    label: "מעניין באתר",
    href: "#",
    hasDropdown: true,
    icon: <HiOutlineDocumentText className="text-xl" />,
  },
  {
    label: "שירות לעסקים",
    href: "#",
    hasDropdown: true,
    icon: <PiBriefcaseLight className="text-xl" />,
  },
  {
    label: "יצירת קשר",
    href: "#",
    icon: <PiBriefcaseLight className="text-xl" />,
  },
  {
    label: "כניסה לחשבון",
    href: "#",
    icon: <CgProfile className="text-xl" />,
  },
];
