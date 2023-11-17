import React from "react"
import { combine } from "@/helpers/combine";
import styles from "./styles.module.scss"

export interface CardProps {
  children: React.ReactNode
  className?: string
  dark?: boolean
}

const Card = ({ children, dark, className }: CardProps) => (
  <div className={combine(styles.card, dark && styles.dark, className)}>
    {children}
  </div>
);


export default Card;