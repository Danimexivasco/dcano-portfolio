import localFont from "next/font/local"
import LinkedinIcon from "/public/icons/linkedin.svg"
import GithubIcon from "/public/icons/github.svg"
import GitlabIcon from "/public/icons/gitlab.svg"
import DevIcon from "/public/icons/dev.svg"
import { RandomColorMap } from "@/types"

export const LOCALES = [ "en-US", "es-ES" ]
export const DEFAULT_LOCALE = "en-US"
export const LOCALES_MAP = {
  "en-US": "en",
  "es-ES": "es"
}
export const NAVIGATION = [
  {
    slug: "/about",
    page: "about"
  },
  {
    slug: "/projects",
    page: "projects"
  },
]

export const SOCIALS = [
  {
    altText: "linkedin-icon",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/daniel-cano-bernal-822b221a2/"
  },
  {
    altText: "github-icon",
    icon: GithubIcon,
    href: "https://github.com/Danimexivasco"
  },
  {
    altText: "gitlab-icon",
    icon: GitlabIcon,
    href: "https://gitlab.com/Danimexivasco"
  },
  {
    altText: "dev-to-icon",
    icon: DevIcon,
    href: "https://dev.to/danimexivasco"
  },
]

export const RINGBEARER_FONT = localFont({
  src: [
    {
      path: "../public/fonts/ringbearer/Ringbearer.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/ringbearer/Ringbearer.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/ringbearer/Ringbearer.woff2",
      weight: "400",
      style: "normal"
    },
  ],
  display: "swap",
})

export const RANDOM_COLOR_OPTIONS = [ "orange", "blue", "green", "red" ]

export const RANDOM_COLOR_MAP: RandomColorMap = {
  orange: "252, 163, 17",
  blue: "53, 129, 184",
  green: "81, 152, 114",
  red: "182, 72, 62"
}