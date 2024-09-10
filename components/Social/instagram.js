import React from "react";
import Link from "next/link";
import Image from "next/image";

import instagramLogo from "@/assets/icons/instagram.png";

import classes from "./instagram.module.css";

import "./styles.css";

const InstagramLinks = () => {
  return (
    <div className="instagram-container">
      <ul className={classes.perks}>
        <Link
          href="https://www.instagram.com/first_account"
          target="_blank"
          passHref
        >
          <Image
            src={instagramLogo}
            alt="Instagram 1"
            className="instagram-logo"
          />
          <li>
            <p>BIJAY SHRESTHA</p>
          </li>
          {/* <p className={classes.perks}>BIJAY SHRESTHA</p> */}
        </Link>
      </ul>

      <Link
        href="https://www.instagram.com/second_account"
        target="_blank"
        passHref
      >
        <Image
          src={instagramLogo}
          alt="Instagram 2"
          className="instagram-logo"
        />
        <p className={classes.perks}>IRRISHA KAYASTHA</p>
      </Link>
    </div>
  );
};

export default InstagramLinks;
