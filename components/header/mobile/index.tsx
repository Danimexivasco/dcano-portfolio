"use client"

import React from "react"
import { usePathname } from "next/navigation";
import { Fade as Hamburger } from "hamburger-react";
import { MobileHeaderProps } from "@/types";
import { NAVIGATION, RINGBEARER_FONT } from "@/utils/constants";
import { combine } from "@/helpers/combine";
import { checkUrl } from "@/helpers/checkUrl";
import { renderSpainLangOption, renderUsaLangOption } from "@/helpers/renderFlags";
import { getLocalizedUrl } from "@/helpers/getlocalizedUrl";
import Link from "@/components/link";
import styles from "./styles.module.scss"


const MobileHeader = ({ dictionary, locale, isOpen, setIsOpen, handleMenu }: MobileHeaderProps) => {
  const pathname = usePathname()
  const localizedUrl = getLocalizedUrl(locale, pathname)

  return (
    <>
      <div className={styles.mobileHeader}>
        <Link href={`/${locale}`} onClick={handleMenu}>
          <h2 className={RINGBEARER_FONT.className}>Dcano Dev</h2>
        </Link>
        <Hamburger toggled={isOpen} onToggle={setIsOpen} />
      </div>
      <section className={combine(styles.mobileMenu, isOpen && styles.opened)} data-cy="mobile-menu">
        <nav>
          <ul>
            {NAVIGATION.map(navItem => {
              const isActive = checkUrl(navItem.slug, pathname)
              return (
                <li key={navItem.slug} className={combine(styles.navItem, isActive && styles.active)}>
                  <Link href={`/${locale}${navItem.slug}`} onClick={handleMenu} data-cy="mobile-nav-item">{dictionary[ navItem.page ]?.metadata.title}</Link>
                </li>
              )
            }
            )}
          </ul>
        </nav>
        <div className={styles.langSelector}>
          <Link
            href={localizedUrl || "/"}
            data-cy="mobile-language-selector"
          >
            {locale === "en" ? renderSpainLangOption() : renderUsaLangOption()}
          </Link>
        </div>
      </section>
    </>
  )
};

export default MobileHeader;