import React from "react"
import Image from "next/image";
import { TechnologyItem } from "@/types";
import { combine } from "@/helpers/combine";
import styles from "./styles.module.scss"

export interface TagProps {
  item: TechnologyItem,
  className?: string
}

const Tag = ({ item, className }: TagProps) => {
  return (
    <div className={combine(styles.tag, className && className)}>
      <Image
        src={item.icon}
        alt={`${item.name}-icon`}
        className={styles.img}
      />
      <span>{item.name}</span>
    </div>
  )
};


export default Tag;