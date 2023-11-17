"use client"

import React from "react"
import NextLink from "next/link";
import { combine } from "@/helpers/combine";
import styles from "./styles.module.scss"

export interface LinkProps {
  href: string | undefined
  asButton?: boolean
  centered?: boolean
  className?: string
  external?: boolean
  onClick?: () => void
  children: React.ReactNode
}


const Link = ({ href, asButton, centered, external, onClick = () => {}, className, children }: LinkProps) => {
  return external ? (
    <a
      href={href}
      target="blank"
      rel="noopener noreferrer"
      className={combine(styles.link, asButton && styles.asButton, centered && styles.centered, className)}
    >
      {children}
    </a>
  ) : (
    <NextLink
      href={href ? href : "/"}
      onClick={onClick}
      className={combine(styles.link, asButton && styles.asButton, centered && styles.centered, className)}
    >
      {children}
    </NextLink>
  )
};


export default Link;