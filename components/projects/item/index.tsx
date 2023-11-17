import React from "react"
import Image, { StaticImageData } from "next/image"
import { Locales } from "@/types"
import { combine } from "@/helpers/combine"
import Card from "@/components/card"
import Link from "@/components/link"
import styles from "./styles.module.scss"

type ImageStructure = {
  src: StaticImageData
  srcLight?: StaticImageData
  alt: string
  isSquare?: boolean
}
export interface ProjectItemStructure {
  headline: string
  url?: string
  aboutTheCompanyText?: string
  aboutTheProjectText?: string
  text?: string
  companyColor?: string
  image: ImageStructure,
  projectImages?: Array<ImageStructure>
  projectVideoURL?: string
  detailPagePath: string
  technologies: Array<string>
  isPersonalProject?: boolean
}
interface ProjectItemProps extends ProjectItemStructure {
  locale?: Locales
  ctaText?: string
  isPersonalProject?: boolean
}


const ProjectItem = ({ headline, companyColor, image, detailPagePath, ctaText, locale, isPersonalProject }: ProjectItemProps) => {
  return (
    <Card key={headline} className={combine(styles.project, isPersonalProject && styles.personalProject)}>
      <div className={styles.imageContainer} style={{ backgroundColor: companyColor }}>
        <Image
          src={image.src}
          alt={image.alt}
          className={combine(styles.image, image.isSquare && styles.square)}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.headline}>{headline}</h3>
        <Link asButton href={`/${locale}/projects${detailPagePath}`} className={styles.cta}>{ctaText}</Link>
      </div>
    </Card>
  )
};


export default ProjectItem;