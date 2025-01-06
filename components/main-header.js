import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "../public/images/logo.png";
import style from "./main-header.module.css";
import NavLinks from "./nav-links";

const MainHeader = () => {
  return (
    <header className={style.header}>
      {/* Logo */}
      <Link href="/" className={style.logo}>
        <Image src={logo} alt="food-image" priority />
        Recipedia
      </Link>
      {/* Navigation */}
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLinks href="/meals"> Browse Meals</NavLinks>
          </li>

          <li>
            <NavLinks href="/community"> Foodies Community</NavLinks>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
