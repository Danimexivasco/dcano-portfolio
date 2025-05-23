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
import { getRandomValue } from "@/helpers/getRandomValue";
import { RANDOM_COLOR_MAP, RANDOM_COLOR_OPTIONS } from "@/utils/constants";

const Header = ({ dictionary, locale }: HeaderProps) => {
  const [ isClient, setIsClient ] = useState(false)
  const [ randomColor, setRandomColor ] = useState(() => getRandomValue(RANDOM_COLOR_OPTIONS) as string)
  const [ isOpen, setIsOpen ] = useState<boolean>(false)

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

  useEffect(() => {
    setIsClient(true)
    if (randomColor) {
      document.documentElement.style.setProperty("--random-rgb-color", RANDOM_COLOR_MAP[ randomColor ]);
      sessionStorage.setItem("random-color", randomColor)
    }
  }, [ randomColor ])

  const { width } = useWindowSize()
  const { scrollY, scrollDirection } = useScrollPosition()
  const isMobile = width && width < getNumberFromPx(variables.breakpointXs)

  const renderHeader = () => {
    if (isMobile) return <MobileHeader dictionary={dictionary} locale={locale} isOpen={isOpen} setIsOpen={setIsOpen} handleMenu={handleMenu}/>
    return <DesktopHeader dictionary={dictionary} locale={locale} />
  }

  return isClient ? (
    <header className={combine(styles.header,
      (scrollDirection === "up" && scrollY > 0 || isOpen) && styles.inScroll,
      randomColor && styles[ randomColor ]
    )}>
      <Container className={styles.headerContainer}>
        {renderHeader()}
      </Container>
    </header>
  ) : (<header className={styles.header}></header>)
};

export default Header;