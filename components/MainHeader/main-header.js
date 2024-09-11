import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/love.png";

import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-links";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            src={logoImg}
            alt="A love between bijay and irrisha"
            priority
          />
          BIJAY IRRISHA
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/memories">Browse Memories</NavLink>
            </li>
            <li>
              <NavLink href="/videomemo">Browse Video Memories</NavLink>
            </li>

            <li>
              <NavLink href="/community">Connect With Us</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
