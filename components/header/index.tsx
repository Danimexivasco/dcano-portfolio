"use client"

import React, { useEffect, useState } from "react"
import variables from "../../styles/_variables.module.scss"
import useWindowSize from "@/hooks/useWindowSize";
import useScrollPosition from "@/hooks/useScrollPosition";
import { combine } from "@/helpers/combine";
import { getNumberFromPx } from "@/helpers/getNumberFromPx";
import DesktopHeader from "./desktop/index";
import MobileHeader from "./mobile/index";
import { HeaderProps } from "@/types";
import Container from "../container";
import styles from "./styles.module.scss";

const Header = ({ dictionary, locale }: HeaderProps) => {
  const [ isClient, setIsClient ] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const { width } = useWindowSize()
  const { scrollY, scrollDirection } = useScrollPosition()
  const isMobile = width && width < getNumberFromPx(variables.breakpointXs)

  const renderHeader = () => {
    if (isMobile) return <MobileHeader />
    return <DesktopHeader dictionary={dictionary} locale={locale} />
  }

  return isClient ? (
    <header className={combine(styles.header, (scrollDirection === "up" && scrollY > 0) && "sticky")}>
      <Container className={styles.headerContainer}>
        {renderHeader()}
      </Container>
    </header>
  ) : (<header></header>)
};

export default Header;