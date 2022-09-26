import React, { useState, useRef } from "react";
import Link from "next/link";
import { List, LinkedinLogo, GithubLogo, X } from "phosphor-react";
import styles from "./Header.module.css";
import useOutsideClick from "../../hooks/useOutsideClick";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => {
    if (
      ref.current &&
      window?.getComputedStyle(ref.current, null).getPropertyValue("left") ===
        "0px"
    )
      setMenuOpen(false);
  });
  return (
    <div className={styles.nav}>
      <div className={styles.heading}>
        <Link href="/">
          <h1>Cameron Zimmerman</h1>
        </Link>
        <List
          size={48}
          onClick={() => {
            return setMenuOpen(true);
          }}
          className={styles.list}
          aria-label="Dropdown Menu Button"
        />
      </div>
      <div className={`${styles.socials} ${styles.link}`}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/cameron-zimmerman/"
        >
          <LinkedinLogo size={48} aria-label="LinkedIn button link" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/CameronZimmerman"
        >
          <GithubLogo size={48} aria-label="Github button link" />
        </a>
      </div>
      <nav
        className={menuOpen ? styles.sidebarMenuOpen : styles.sidebarMenu}
        ref={ref}
      >
        <X size={24} className={styles.x} onClick={() => setMenuOpen(false)} />
        <h1 className={styles.menuHeader}>Menu</h1>
        <section
          className={`${styles.sidebarLinks} ${styles.link}`}
          onClick={() => setMenuOpen(false)}
        >
          <Link href="/">Landing</Link>
          <Link href="/resume.pdf">Resume</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </section>
      </nav>
    </div>
  );
};

export default Header;
