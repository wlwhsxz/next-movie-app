"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/navigationTab.module.css";

export default function NavigationTab() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about">About</Link> {path === "/about" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
