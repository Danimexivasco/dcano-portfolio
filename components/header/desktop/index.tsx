import React from "react"
import { usePathname } from "next/navigation"
import { HeaderProps } from "@/types";
import { NAVIGATION, RINGBEARER_FONT } from "@/utils/constants";
import { combine } from "@/helpers/combine";
import { checkUrl } from "@/helpers/checkUrl";
import { getLocalizedUrl } from "@/helpers/getlocalizedUrl";
import { renderSpainLangOption, renderUsaLangOption } from "@/helpers/renderFlags";
import Link from "@/components/link";
import styles from "./styles.module.scss"

const DesktopHeader = ({ dictionary, locale }: HeaderProps) => {
  const pathname = usePathname()
  const localizedUrl = getLocalizedUrl(locale, pathname)
  return (
    <div className={styles.desktopHeader}>
      <Link href={`/${locale}`}>
        <h2 className={RINGBEARER_FONT.className}>Dcano Dev</h2>
      </Link>
      <div className={styles.rightSide}>
        <nav>
          <ul>
            {NAVIGATION.map(navItem => {
              const isActive = checkUrl(navItem.slug, pathname)
              return (
                <li key={navItem.slug} className={combine(styles.navItem, isActive && styles.active)}>
                  <Link href={`/${locale}${navItem.slug}`}>{dictionary[ navItem.page ]?.metadata.title}</Link>
                </li>
              )
            }
            )}
          </ul>
        </nav>
        <div className={styles.languageSelector}>
          {locale === "en" ?
            <div className={styles.langContainer}>{renderUsaLangOption()}</div>
            :
            <div className={styles.langContainer}>{renderSpainLangOption()}</div>
          }
          {locale === "en" ?
            <Link href={localizedUrl || "/"} className={combine(styles.langContainer, styles.dropdown )}>
              {renderSpainLangOption()}
            </Link>
            :
            <Link href={localizedUrl || "/"} className={combine(styles.langContainer, styles.dropdown )}>
              {renderUsaLangOption()}
            </Link>
          }
        </div>
      </div>
    </div>
  )
};

export default DesktopHeader;