import LinkedinIcon from "/public/icons/linkedin.svg"
import GithubIcon from "/public/icons/github.svg"
import GitlabIcon from "/public/icons/gitlab.svg"
import DevIcon from "/public/icons/dev.svg"

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