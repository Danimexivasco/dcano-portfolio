import React from "react"
import styles from "./styles.module.scss"
import { combine } from "@/helpers/combine";

export interface SeparatorProps {
  startPoint: "topLeft" | "bottomLeft"
  filledPart: "top" | "bottom"
}

const Separator = ({ startPoint = "topLeft", filledPart }: SeparatorProps) => {
  return (
    <div className={combine(styles.separator, styles[ startPoint ], styles[ filledPart ])}></div>
  )
};


export default Separator;