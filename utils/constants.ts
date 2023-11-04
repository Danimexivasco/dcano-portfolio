import localFont from "next/font/local"
import { RandomColorMap } from "@/types"
import { icons } from "./icons"

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
    icon: icons.LinkedinIcon,
    href: "https://www.linkedin.com/in/daniel-cano-bernal-822b221a2/"
  },
  {
    altText: "github-icon",
    icon: icons.GithubIcon,
    href: "https://github.com/Danimexivasco"
  },
  {
    altText: "gitlab-icon",
    icon: icons.GitlabIcon,
    href: "https://gitlab.com/Danimexivasco"
  },
  {
    altText: "dev-to-icon",
    icon: icons.DevIcon,
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

export const TECHNOLOGIES = [
  {
    name: "React",
    icon: icons.ReactIcon
  },
  {
    name: "HTML 5",
    icon: icons.Html5Icon
  },
  {
    name: "CSS 3",
    icon: icons.Css3Icon
  },
  {
    name: "Javascript",
    icon: icons.JsIcon
  },
  {
    name: "Git",
    icon: icons.GitIcon
  },
  {
    name: "Api",
    icon: icons.ApiIcon
  },
  {
    name: "Cypress",
    icon: icons.CypressIcon
  },
  {
    name: "Gatsby",
    icon: icons.GatsbyIcon
  },
  {
    name: "Next.js",
    icon: icons.NextIcon
  },
  {
    name: "Sass",
    icon: icons.SassIcon
  },
  {
    name: "Typescript",
    icon: icons.TsIcon
  },
  {
    name: "Bootstrap",
    icon: icons.BootstrapIcon
  },
  {
    name: "Contentful",
    icon: icons.ContentfulIcon
  },
  {
    name: "Graphql",
    icon: icons.GraphqlIcon
  },
  {
    name: "Nodejs",
    icon: icons.NodeJsIcon
  },
  {
    name: "Express",
    icon: icons.ExpressIcon
  },
  {
    name: "Firebase",
    icon: icons.FirebaseIcon
  },
  {
    name: "GSAP",
    icon: icons.GsapIcon
  },
  {
    name: "Gulp",
    icon: icons.GulpIcon
  },
  {
    name: "Handlebars",
    icon: icons.HandlebarsIcon
  },
  {
    name: "jQuery",
    icon: icons.JqueryIcon
  },
  {
    name: "MongoDB",
    icon: icons.MongodbIcon
  },
  {
    name: "Redux",
    icon: icons.ReduxIcon
  },
  {
    name: "Strapi",
    icon: icons.StrapiIcon
  },
  {
    name: "Tests",
    icon: icons.TestsIcon
  },
  {
    name: "Zapier",
    icon: icons.ZapierIcon
  },
  {
    name: "Azure DevOps",
    icon: icons.AzureIcon
  },
  {
    name: "Styled Components",
    icon: icons.StyledComponentsIcon
  }
]

export const TIMELINE_ITEMS_EN = [
  {
    year: 2011,
    headline: "Universidad Púbica del País Vasco (UPV / EHU)",
    subHeadline: "Grado en Administración y Dirección de Empresas",
    fromTo: "sept 2011 - may 2015",
    duration: "(3 years and 9 months)"
  },
  {
    year: 2014,
    headline: "Universidad Modelo de Mérida, México",
    subHeadline: "Erasmus +, End Of Degree Project",
    fromTo: "aug 2014 - aug 2015",
    duration: "(1 year)"
  },
  {
    year: 2015,
    headline: "Arpen SPR de RL de CV",
    url: "https://arpen.mx/",
    subHeadline: "Encargado del Departamento de Ventas (Stevia órganica)",
    fromTo: "aug 2015 - apr 2016",
    duration: "(9 months)"
  },
  {
    year: 2018,
    headline: "IES Plaiaundi BHI",
    subHeadline: "Grado superior en desarrollo de aplicaciones web",
    fromTo: "sept 2018 - may 2020",
    duration: "(1 year and 9 months)"
  },
  {
    year: 2019,
    headline: "Lawyou",
    url: "https://lawyoulegal.com/",
    subHeadline: "Web Developer",
    fromTo: "jun 2019 - jun 2020",
    duration: "(1 year)"
  },
  {
    year: 2020,
    headline: "Digital Cuisine",
    url: "https://www.cuisine.digital/",
    subHeadline: "Front-end / Full-stack developer",
    fromTo: "oct 2020 - now",
    duration: "(3 years and 1 month)"
  },
]
export const TIMELINE_ITEMS_ES = [
  {
    year: 2011,
    headline: "Universidad Púbica del País Vasco (UPV / EHU)",
    subHeadline: "Grado en Administración y Dirección de Empresas",
    fromTo: "sept 2011 - may 2015",
    duration: "(3 years and 9 months)"
  },
  {
    year: 2014,
    headline: "Universidad Modelo de Mérida, México",
    subHeadline: "Erasmus +, End Of Degree Project",
    fromTo: "aug 2014 - aug 2015",
    duration: "(1 year)"
  },
  {
    year: 2015,
    headline: "Arpen SPR de RL de CV",
    url: "https://arpen.mx/",
    subHeadline: "Encargado del Departamento de Ventas (Stevia órganica)",
    fromTo: "aug 2015 - apr 2016",
    duration: "(9 months)"
  },
  {
    year: 2018,
    headline: "IES Plaiaundi BHI",
    subHeadline: "Grado superior en desarrollo de aplicaciones web",
    fromTo: "sept 2018 - may 2020",
    duration: "(1 year and 9 months)"
  },
  {
    year: 2019,
    headline: "Lawyou",
    url: "https://lawyoulegal.com/",
    subHeadline: "Web Developer",
    fromTo: "jun 2019 - jun 2020",
    duration: "(1 year)"
  },
  {
    year: 2020,
    headline: "Digital Cuisine",
    url: "https://www.cuisine.digital/",
    subHeadline: "Front-end / Full-stack developer",
    fromTo: "oct 2020 - now",
    duration: "(3 years and 1 month)"
  },
]
