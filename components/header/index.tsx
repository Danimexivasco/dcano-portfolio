"use client"

import React, { useEffect, useState } from "react"
import useWindowSize from "@/hooks/useWindowSize";
import styles from "./styles.module.scss"
import variables from "../../styles/_variables.module.scss"
import useScrollPosition from "@/hooks/useScrollPosition";
import { combine } from "@/helpers/combine";
import { getNumberFromPx } from "@/helpers/getNumberFromPx";
import DesktopHeader from "./desktop/index";
import MobileHeader from "./mobile/index";

const Header = () => {
  const [ isClient, setIsClient ] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const { width } = useWindowSize()
  const { scrollY, scrollDirection } = useScrollPosition()
  const isMobile = width && width < getNumberFromPx(variables.breakpointXs)

  const renderHeader = () => {
    if (isMobile) return <MobileHeader />
    return <DesktopHeader />
  }

  return isClient ? (
    <header className={combine(styles.header, (scrollDirection === "up" && scrollY > 0) && "sticky")}>
      {renderHeader()}
    </header>
  ) : (<header className={styles.header}></header>)
};

export default Header;