"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";
import { HeaderProps } from "@/types";
import styles from "./styles.module.scss"
import { NAVIGATION, RINGBEARER_FONT } from "@/utils/constants";
import { combine } from "@/helpers/combine";
import { checkUrl } from "@/helpers/checkUrl";
import { usePathname } from "next/navigation";
import { renderSpainLangOption, renderUsaLangOption } from "@/helpers/renderFlags";
import { getLocalizedUrl } from "@/helpers/getlocalizedUrl";


const MobileHeader = ({ dictionary, locale }: HeaderProps) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const pathname = usePathname()
  const localizedUrl = getLocalizedUrl(locale, pathname)

  useEffect(() => {
    if (isOpen && document) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [ isOpen ])

  const handleMenu = () => {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <div className={styles.mobileHeader}>
        <Link href={`/${locale}`} onClick={handleMenu}>
          <h2 className={RINGBEARER_FONT.className}>Dcano Dev</h2>
        </Link>
        <Hamburger toggled={isOpen} onToggle={setIsOpen} />
      </div>
      <section className={combine(styles.mobileMenu, isOpen && styles.opened)}>
        <nav>
          <ul>
            {NAVIGATION.map(navItem => {
              const isActive = checkUrl(navItem.slug, pathname)
              return (
                <li key={navItem.slug} className={combine(styles.navItem, isActive && styles.active)}>
                  <Link href={`/${locale}${navItem.slug}`} onClick={handleMenu}>{dictionary[ navItem.page ]?.metadata.title}</Link>
                </li>
              )
            }
            )}
          </ul>
        </nav>
        <div className={styles.langSelector}>
          {locale === "en" ?
            <Link href={localizedUrl || "/"} >{renderSpainLangOption()}</Link>
            :
            <Link href={localizedUrl || "/"} >{renderUsaLangOption()}</Link>
          }
        </div>
      </section>
    </>
  )
};

export default MobileHeader;