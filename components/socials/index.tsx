"use client"

import React, { useEffect, useState } from "react";
import { SOCIALS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";


const Socials = () => {
  const [ randomColor, setRandomColor ] = useState<string | undefined>(undefined)
  useEffect(() => {
    setRandomColor(sessionStorage.getItem("random-color") || undefined)
  }, [])
  
  return (
    <div className={styles.socials}>
      {SOCIALS?.map(({ altText, icon, href }) => (
        <Link key={altText} href={href}>
          <Image
            src={icon}
            alt={altText}
            className={randomColor && styles[ randomColor ]}
          />
        </Link>
      ))}
    </div>
  )
};


export default Socials;