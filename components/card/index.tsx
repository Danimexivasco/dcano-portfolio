import React from "react"
import styles from "./styles.module.scss"
import { combine } from "@/helpers/combine";

export interface CardProps {
  children: React.ReactNode,
  className: string
}

const Card = ({ children, className }: CardProps) => (
  <div className={combine(styles.card, className)}>
    {children}
  </div>
);


export default Card;