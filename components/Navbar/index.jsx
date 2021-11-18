import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  const { username } = props;

  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href="/">
          <a className={styles.logoWrapper}>
            <Image
              src="/assets/netflix.svg"
              alt="Netflix logo"
              width="128px"
              height="34px"
            />
          </a>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.navItem2}>
            <Link href="/browse/my-lists">
              <a>My List</a>
            </Link>
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button
              className={styles.usernameBtn}
              onClick={() => setShowDropDown((prevState) => !prevState)}
            >
              <p className={styles.username}>{username}</p>
              {/** Expand more icon */}
              <Image
                src={"/assets/expand_more.svg"}
                alt="Expand dropdown"
                width="24px"
                height="24px"
              />
            </button>

            {showDropDown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login">
                    <a className={styles.linkName}>Sign out</a>
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
