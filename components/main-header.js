import Link from "next/link";
import React from "react";
import Logo from "../public/images/logo.png";
import style from "./main-header.module.css";
const MainHeader = () => {
  return (
    <header className={style.header}>
      {/* Logo */}
      <Link href="/" className={style.logo}>
        <img src={Logo.src} alt="logo of food images" />
        Recipedia
      </Link>
      {/* Navigation */}
      <nav className={style.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          {/* <li>
            <Link href="meals/share">Share Meal</Link>
          </li> */}
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
