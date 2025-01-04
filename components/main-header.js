import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "../public/images/logo.png";
import style from "./main-header.module.css";
const MainHeader = () => {
  return (
    <header className={style.header}>
      {/* Logo */}
      <Link href="/" className={style.logo}>
        <Image src={logo} alt="food-image" priority />
        {/* <img src={logo.src} alt="logo of food image" /> */}
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
