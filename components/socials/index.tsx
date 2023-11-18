"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "@/components/link";
import { SOCIALS } from "@/utils/constants";
import styles from "./styles.module.scss";


const Socials = () => {
  const [ randomColor, setRandomColor ] = useState<string | undefined>(undefined)
  useEffect(() => {
    setRandomColor(sessionStorage.getItem("random-color") || undefined)
  }, [])
  
  return (
    <div className={styles.socials}>
      {SOCIALS?.map(({ alt, icon, href }) => (
        <Link key={alt} href={href} external>
          <Image
            src={icon}
            alt={alt}
            className={randomColor && styles[ randomColor ]}
          />
        </Link>
      ))}
    </div>
  )
};


export default Socials;