"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./nav-links.module.css";

const NavLinks = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? style.active : undefined}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
