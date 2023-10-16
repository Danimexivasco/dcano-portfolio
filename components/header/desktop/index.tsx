import React from "react"
import { NAVIGATION } from "@/utils/constants";
import Link from "next/link";
import styles from "./styles.module.scss"
import { HeaderProps } from "@/types";

const DesktopHeader = ({ dictionary, locale }: HeaderProps) => {
  return (
    <div className={styles.desktopHeader}>
      <h2>Logo</h2>
      <nav>
        <ul>
          {NAVIGATION.map(navItem =>
            <li key={navItem.slug}>
              <Link href={`/${locale}${navItem.slug}`}>{dictionary[ navItem.page ].metadata.title}</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
};

export default DesktopHeader;