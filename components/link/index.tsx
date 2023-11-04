"use client"

import React from "react"
import NextLink from "next/link";
import { combine } from "@/helpers/combine";
import styles from "./styles.module.scss"

export interface LinkProps {
  href: string,
  asButton?: boolean,
  className?: string,
  onClick?: () => void,
  children: React.ReactNode
}


const Link = ({ href, asButton, onClick = () => {}, className, children }: LinkProps) => {
  return (
    <NextLink href={href} onClick={onClick} className={combine(styles.link, asButton && styles.asButton, className && className)}>
      {children}
    </NextLink>
  )
};


export default Link;