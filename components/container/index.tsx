import React from "react"
import styles from "./styles.module.scss"
import { combine } from "@/helpers/combine";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string | boolean | undefined;
}

const Container = ({ children, className }: ContainerProps) => (
  <div className={combine(styles.container, className && className)}>
    {children}
  </div>
);


export default Container;