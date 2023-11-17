import React from "react"
import styles from "./styles.module.scss"
import { combine } from "@/helpers/combine";

type AllowedElements = "div" | "section";
export interface ContainerProps {
  as?: AllowedElements
  children: React.ReactNode
  className?: string | boolean | undefined
}

const Container = ({ children, as: As = "div", className }: ContainerProps) => {
  return (
    <As className={combine(styles.container, className && className)}>
      {children}
    </As>
  )
};


export default Container;