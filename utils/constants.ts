import localFont from "next/font/local"
import { LocalesMap, NavigationItem, QuoteItem, RandomColorMap, SocialItem } from "@/types"
import { TimelineItemStructure } from "@/components/timeline/item"
import { HistoryItemStructure } from "@/components/history/item"
import { ProjectItemStructure } from "@/components/projects/item"
import { icons } from "./icons"
import DCMayanRuinsImg from "/public/images/dc_mayan_ruins.webp"
import PtoStaMariaImg from "/public/images/puerto_santa_maria.webp"
import SelvaIratiImg from "/public/images/basque.webp"
import LeturImg from "/public/images/letur.webp"
import JerezImg from "/public/images/jerez.webp"
import PortfolioV1Img from "/public/images/projects/portfoliov1.webp"
import PortfolioV2Img from "/public/images/projects/portfoliov2.webp"
import CityGameImg from "/public/images/projects/city_game.webp"
import SecovisaImg from "/public/images/projects/secovisa.webp"
import SecovisaMobileImg from "/public/images/projects/secovisa_mobile.webp"
import TeledataImg from "/public/images/projects/teledata.webp"
import TeledataBankImg from "/public/images/projects/teledata_bank.webp"
import { BannerCta } from "@/components/banner"

export const LOCALES = [ "en-US", "es-ES" ]
export const DEFAULT_LOCALE = "en-US"
export const LOCALES_MAP: LocalesMap = {
  "en-US": "en",
  "es-ES": "es"
}
export const NAVIGATION: Array<NavigationItem> = [
  {
    slug: "/projects",
    page: "projects"
  },
  {
    slug: "/about",
    page: "about"
  },
]

export const SOCIALS: Array<SocialItem> = [
  {
    alt: "linkedin-icon",
    icon: icons.LinkedinIcon,
    href: "https://www.linkedin.com/in/daniel-cano-bernal/"
  },
  {
    alt: "github-icon",
    icon: icons.GithubIcon,
    href: "https://github.com/Danimexivasco"
  },
  {
    alt: "gitlab-icon",
    icon: icons.GitlabIcon,
    href: "https://gitlab.com/Danimexivasco"
  },
  {
    alt: "dev-to-icon",
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

export const RANDOM_COLOR_OPTIONS: Array<string> = [ "orange", "blue", "green", "red" ]

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
    name: "GraphQL",
    icon: icons.GraphQLIcon
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
    name: "Tailwind CSS",
    icon: icons.TailwindCssIcon
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
    name: "Webflow",
    icon: icons.WebflowIcon
  },
  {
    name: "Azure DevOps",
    icon: icons.AzureIcon
  },
  {
    name: "Styled Components",
    icon: icons.StyledComponentsIcon
  },
]

export const TIMELINE_ITEMS: Record<string, Array<TimelineItemStructure>> = {
  en: [
    {
      year: 2011,
      headline: "University of the Basque Country (UPV / EHU)",
      subHeadline: "Degree in Business Administration and Management",
      fromTo: "sept 2011 - may 2015",
      duration: "(3 years and 9 months)"
    },
    {
      year: 2014,
      headline: "Universidad Modelo of Merida, Mexico",
      subHeadline: "Erasmus +, End Of Degree Project",
      fromTo: "aug 2014 - aug 2015",
      duration: "(1 year)"
    },
    {
      year: 2015,
      headline: "Arpen SPR de RL de CV",
      url: "https://arpen.mx/",
      subHeadline: "Sales Department Manager (Organic Stevia)",
      fromTo: "aug 2015 - apr 2016",
      duration: "(9 months)"
    },
    {
      year: 2018,
      headline: "IES Plaiaundi BHI",
      subHeadline: "Higher degree in Web Application Development",
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
  ],
  es: [
    {
      year: 2011,
      headline: "Universidad Púbica del País Vasco (UPV / EHU)",
      subHeadline: "Grado en Administración y Dirección de Empresas",
      fromTo: "sept 2011 - may 2015",
      duration: "(3 años y 9 meses)"
    },
    {
      year: 2014,
      headline: "Universidad Modelo de Mérida, México",
      subHeadline: "Erasmus +, TFG",
      fromTo: "ago 2014 - ago 2015",
      duration: "(1 año)"
    },
    {
      year: 2015,
      headline: "Arpen SPR de RL de CV",
      url: "https://arpen.mx/",
      subHeadline: "Encargado del Departamento de Ventas (Stevia órganica)",
      fromTo: "ago 2015 - abr 2016",
      duration: "(9 meses)"
    },
    {
      year: 2018,
      headline: "IES Plaiaundi BHI",
      subHeadline: "Grado superior en desarrollo de aplicaciones web",
      fromTo: "sept 2018 - may 2020",
      duration: "(1 año y 9 meses)"
    },
    {
      year: 2019,
      headline: "Lawyou",
      url: "https://lawyoulegal.com/",
      subHeadline: "Desarrollador Web",
      fromTo: "jun 2019 - jun 2020",
      duration: "(1 año)"
    },
    {
      year: 2020,
      headline: "Digital Cuisine",
      url: "https://www.cuisine.digital/",
      subHeadline: "Desarrollador Front-end / Full-stack",
      fromTo: "oct 2020 - actualidad",
      duration: "(3 años y 1 mes)"
    },
  ]
}

export const HISTORY_ITEMS: Record<string, Array<HistoryItemStructure>> = {
  en: [
    {
      headline: "Basque Country",
      date: "1993 - 2014 / 2018 - 2020",
      text: `In the **north of Spain**, just in the border with France we can find **my hometown** Irun. Sea, mountains, not too much sun... The weather is UK like but this makes the Basque Country so green 💚.  
      The food is also the best food you can eat, from variety, to quantity or quality, so definitely you should go to see the sunsets, the endless cliffs and the forests of this beautiful.  
      I usually go there to visit my beautiful **family** also ❤️`,
      image: {
        src: SelvaIratiImg,
        alt: "selva-irati"
      },
    },
    {
      headline: "Mexico",
      date: "2014 - 2018 ",
      text: `**Viva Mexico cabrones!!** I lived in Mexico from my 21st to my 25th birthday and these were some of the best years of my life. All the days were different and with **plenty of things to do**, including: visit mayan ruins, cenotes, beaches (I was just to 3hrs ride of the Caribbean sea 😍), jungle, a lot of beautiful people, burning sun, tacos, "paquetaxo quexo", meet friendly "toloks"/iguanas... For a young boy as I was (a younger one I mean), **the paradise**.  
      Here I bought **my first car**, a green "Vocho" or "Vochito" (Volskwagen Beetle) as the locals say . In these days I also meet one of my best friends to this day, Fernando Alonso (he is not the F1 driver)`,
      image: {
        src: DCMayanRuinsImg,
        alt: "chacchoben-mayan-ruins"
      },
    },
    {
      headline: "Puerto de Santa María",
      date: "2020 - 2021",
      text: `This part of my life could be described as **sunsets, beach, and salty smell**. I lived in a manor house just in the middle of the old town, near the Castle. There I met beautiful neightbours, and a lot of friends, specifically the seagulls that visit me in the rooftop.  
      Apart from that here I bought my first, and unique, motorbike which I crashed the first day (nothing serious, just enough to scratch the garage owner's daughter's car)`,
      image: {
        src: PtoStaMariaImg,
        alt: "puerto-de-santa-maría-sunset"
      },
    },
    {
      headline: "Jerez",
      date: "2021 - 2022",
      text: `Jerez, the city of the horse, was my second destination in Andalusia. It is 20 minutos from El Puerto de Santa Maria, and there you can enjoy of endless **fields**, **old wineries** and a lot of tipical bars with live shows of **flamenco!** 💃🏻  
      If you are interested in **history**, this city is full of it, there I visited one of my favorite museums to this day, the archeological museum of Jerez.`,
      image: {
        src: JerezImg,
        alt: "jerez-cathedral"
      },
    },
    {
      headline: "Letur",
      date: "2022 - Now",
      text: `Letur, somebody called it the "daughter of water" and I think that is a well-deserved name. The town is on the top of a ridge and walking by their old town **arabic streets** you will be constantly accompanied by the sound of water flowing through the irrigation ditches, which have been in use for over a thousand years.  
      Some of my favourite things to do there is to walk into the **nature** with my dog and to do **stargazing**, you will agree with me that it's a real privilege to get out to the terrace and see the milky way in all its beauty. But even better, if you pull out the telescope, you will be able to see galaxies, nebulas, globular clusters... From your own home! This is just amazing 🤩`,
      image: {
        src: LeturImg,
        alt: "letur-landscape"
      },
    },
  ],
  es: [
    {
      headline: "País Vasco",
      date: "1993 - 2014 / 2018 - 2020",
      text: `En el **norte de España**, justo en la frontera con Francia, podemos encontrar mi **ciudad natal** Irún. Mar, montañas, no demasiado sol... El clima es como el del Reino Unido, pero esto a su vez hace que el País Vasco sea tan verde 💚.
      La comida también es un auténtico lujo, por variedad, cantidad o calidad, así que definitivamente deberías ir a ver las puestas de sol, los acantilados interminables y los bosques de este hermoso lugar.
      Suelo ir allí para visitar a mi hermosa familia también ❤️.`,
      image: {
        src: SelvaIratiImg,
        alt: "selva-irati"
      },
    },
    {
      headline: "México",
      date: "2014 - 2018 ",
      text: `**¡Viva México cabrones!** Viví en México desde los 21 hasta los 25 y fueron algunos de los mejores años de mi vida. Todos los días eran diferentes y con **muchas cosas que hacer**, como por ejemplo: visitar ruinas mayas, cenotes, playas (estaba a solo 3 horas del Caribe 😍), selva, mucha gente hermosa, sol ardiente, tacos, 'paquetaxo quexo', conocer 'toloks' amigables/iguanas... Para un joven como yo (un poco más joven quiero decir), **el paraíso**.
      Aquí compré **mi primer coche**, un "Vocho" o "Vochito" (Volkswagen Escarabajo) verde, como dicen los lugareños. En estos días también conocí a uno de mis mejores amigos hasta el día de hoy, Fernando Alonso (no, este no es el piloto de F1).`,
      image: {
        src: DCMayanRuinsImg,
        alt: "chacchoben-mayan-ruins"
      },
    },
    {
      headline: "Puerto de Santa María",
      date: "2020 - 2021",
      text: `Esta parte de mi vida podría describirse como **atardeceres, playa y olor a mar**. Viví en una casa señorial justo en el centro del casco antiguo, cerca del Castillo. Allí coincidí con vecinos hermosos y muchos amigos, como las gaviotas que me visitaban en la azotea.
      Por otra parte, aquí compré mi primera, y única, moto que choqué el primer día (nada grave, solo lo suficiente para rayar el coche de la hija del dueño del garaje en el que la aparqué).`,
      image: {
        src: PtoStaMariaImg,
        alt: "puerto-de-santa-maría-sunset"
      },
    },
    {
      headline: "Jerez",
      date: "2021 - 2022",
      text: `Jerez, la ciudad del caballo, fue mi segundo destino en Andalucía. A 20 minutos de El Puerto de Santa María, allí puedes disfrutar de **campos interminables**, **antiguas bodegas** y muchos bares típicos con espectáculos de **flamenco!** 💃🏻.
      Si eres aficionado a la historia, la ciudad rebosa de ella; allí visité uno de mis museos favoritos hasta el día de hoy, el museo arqueológico de Jerez.`,
      image: {
        src: JerezImg,
        alt: "jerez-cathedral"
      },
    },
    {
      headline: "Letur",
      date: "2022 - Now",
      text: `Letur, alguien lo llamó la 'hija del agua' y creo que es un nombre bien merecido. El pueblo está en la cima de un peñón y al caminar por sus antiguas **calles árabes**, estarás constantemente acompañado por el sonido del agua que fluye a través de las acequias, las mismas que llevan usándose durante más de mil años.
      Algunas de mis cosas favoritas para hacer allí son caminar por la **naturaleza** con mi perro y disfrutar del **cielo nocturno**, estarás de acuerdo conmigo en que es un verdadero privilegio salir a la terraza y ver la Vía Láctea en todo su esplendor. Pero aún mejor, si sacas el telescopio, podrás ver galaxias, nebulosas, cúmulos globulares... ¡Desde tu propia casa! Esto es simplemente asombroso 🤩.`,
      image: {
        src: LeturImg,
        alt: "letur-landscape"
      },
    },
  ]
}

export const PROJECT_ITEMS: Record<string, Array<ProjectItemStructure>> = {
  en: [
    {
      headline: "Corona Warn App",
      url: "https://www.coronawarn.app/",
      aboutTheProjectText: "The Corona-Warn-App by the **German government** is a COVID-19 contact-tracing app designed to notify users if they have been in close proximity to someone who later tests positive for the virus. It aims to enhance public health efforts by quickly identifying and alerting individuals at risk of infection.\n #### Key points:\n * Based on technologies with a **decentralized approach**\n * **E2E testing** purposes the project relies on **Cypress**\n * **Transparency** is key to both protect the app's end-users and to encourage adoption.",
      companyColor: "#54b3e1",
      image: {
        src: icons.CwaLogoIcon,
        alt: "cwa-logo",
      },
      detailPagePath: "/cwa",
      technologies: [ "Javascript", "HTML 5", "CSS 3", "Cypress", "Git", "Bootstrap", "Handlebars", "jQuery" ],
    },
    {
      headline: "iF Design",
      url: "https://ifdesign.com/",
      aboutTheCompanyText: "**Introduced in 1954**, The iF Design Award is a prestigious international design competition that recognizes outstanding achievements in various design categories. Winning the iF Design Award signifies **excellence and innovation in design**, showcasing a product's or project's exceptional aesthetic and functional qualities.",
      aboutTheProjectText: "The project was developed using **Jamstack** (Gatsby + Contentful), we did our data queries using **GraphQL** and for the styling we used **Sass** and we connected multiple APIs hosted on Azure and which get information from customer hosted **Elasticsearch** to our front-end\n #### Key points:\n * Done **from scratch** and evolved over time having multiple relaunches\n * I had the pleasure of **working on it from the beginning** and until the firsts releases\n * Beacuse of the huge amoiunt of data, it combines the Gatsby V4 **SSR** feature with the usual Gatsby **static pages** generation\n * I was **involved** also in its **last relaunch** on September 2023",
      companyColor: "#da1720",
      image: {
        src: icons.IfLogoIcon,
        alt: "iF-logo",
        isSquare: true
      },
      detailPagePath: "/if-design",
      technologies: [ "React", "HTML 5", "CSS 3", "Cypress", "Javascript", "Git", "Api", "Sass", "Gatsby", "Contentful", "GraphQL", "Azure DevOps" ],
    },
    {
      headline: "Vimcar",
      url: "https://vimcar.de/",
      aboutTheCompanyText: "Vimcar is a **German-based** company that provides innovative fleet management solutions, specializing in **vehicle tracking** and **digital mileage logs**. Vimcar's services empower businesses with efficient tools to manage and monitor their fleets, enhancing operational transparency and optimizing overall vehicle usage. More than 100,000 vehicles already trust in their SaaS solution to help them run more efficiently including companies like Allianz, Zalando and Hertha BSC.",
      aboutTheProjectText: "I joined the project as soon as I started working in Digital Cuisine and it was cool since it was my first professional **full-stack** project. We were using **HTML/Handlebars** and **Sass** for the front-end, **Contentful** as CMS and **NodeJs** with **Express** for the backend. \n #### Key points:\n * The project was growing and we ended having multiple projects inside the global one: [careers](https://careers.vimcar.com/de/), [partnership](https://partner.vimcar.de/), [Austria site](https://vimcar.at/), [UK site](https://vimcar.co.uk/)...\n *  I loved that after proposing it, I had the opportunity to implement **E2E testing** for the project through **Cypress**\n * Work with multiple automations through **Zapier**\n * We created some email campaigns through **Mailchimp**\n * The deployements were handled via **Jenkins**\n * At this moment we are **migrating** most of the content from **Contentful** to **Webflow**",
      companyColor: "#14BCF1",
      image: {
        src: icons.VimcarLogoIcon,
        alt: "vimcar-logo",
      },
      detailPagePath: "/vimcar",
      technologies: [ "HTML 5", "CSS 3", "Cypress", "Javascript", "Git", "Api", "Sass", "Express", "Contentful", "Nodejs", "Handlebars", "Azure DevOps", "Zapier", "Jenkins", "Gulp", "jQuery", "Webflow" ],
    },
    {
      headline: "Avrios",
      url: "https://www.avrios.com/",
      aboutTheCompanyText: "Avrios is a Swiss-based company offering a comprehensive fleet management platform. Specializing in automating and streamlining fleet-related tasks, it provides businesses with tools for managing assets, tracking expenses, and ensuring compliance. The platform aims to simplify fleet operations, promoting efficiency and cost-effectiveness for organizations with diverse vehicle fleets.",
      aboutTheProjectText: "Working with Avrios we had the possibility to work in our first **full Webflow** project.\n #### Key points:\n * We did a **migration** of their website from Wordpress to Webflow\n * Worked on several other projects of the company using Webflow\n * We **overcame** the limitation of the custom code hosting code in private repos and serving it afterwards via script",
      companyColor: "#00003e",
      image: {
        src: icons.AvriosLogoIcon,
        alt: "avrios-logo",
      },
      detailPagePath: "/avrios",
      technologies: [ "CSS 3", "Webflow", "Javascript", "Git", "Api", "Zapier" ],
    },
    {
      headline: "FriEnt",
      url: "https://frient.de/",
      aboutTheCompanyText: "FriEnt, short for \"Friedensentwicklung\" in German, is an organization dedicated to peacebuilding and development. FriEnt collaborates with various actors, including NGOs and governmental agencies, to **promote sustainable development and peace initiatives.**",
      aboutTheProjectText: "The project was developed using **Jamstack** (Gatsby + Contentful), we did our data queries using **GraphQL** and for the styling we used **Bootstrap** combined with **Sass**\n #### Key points:\n * I joined the project in an advanced status and worked in some **feature requests** for it\n * We did some email campaigns using **Sendinblue** ",
      companyColor: "#e7e8ec",
      image: {
        src: icons.FrientLogoIcon,
        srcLight: icons.FrientLogoLightIcon,
        alt: "frient-logo",
      },
      detailPagePath: "/frient",
      technologies: [ "React", "HTML 5", "CSS 3", "Bootstrap", "Javascript", "Git", "Api", "Sass", "Gatsby", "Contentful", "GraphQL", "Azure DevOps" ],
    },
    {
      headline: "Bahlsen",
      url: "https://www.bahlsen.com/",
      aboutTheCompanyText: "Bahlsen is a German food company renowned for its **high-quality** sweet **biscuits and cookies**. With a rich heritage dating back to **1889**, Bahlsen is known for iconic products like Choco Leibniz and Hit cookies. The brand represents a commitment to craftsmanship and premium ingredients, delivering delightful treats that have become a staple in European households.",
      aboutTheProjectText: `This was together with Vimcar, one of the first projects I worked on in Digital Cuisine. We created the website **from scratch** and we worked close together with UK Mullenlowe design agency from the start.  
      The project relies on HTML/Handlebars + Sass + JS combo\n #### Key points:\n * Created as **fullscreen scrolling website**\n * Great variety of **animations**, all done with pure CSS`,
      companyColor: "#ffffff",
      image: {
        src: icons.BahlsenLogoIcon,
        srcLight: icons.BahlsenLogoLightIcon,
        alt: "bahlsen-logo",
      },
      detailPagePath: "/bahlsen",
      technologies: [ "React", "HTML 5", "CSS 3", "Javascript", "Git", "Sass", "Azure DevOps", "Handlebars", "Gulp", "jQuery" ],
    },
    {
      headline: "Peacebuilding Forum (PBF)",
      url: "https://www.frient-peacebuilding-forum.de/",
      aboutTheCompanyText: "The FriEnt Peacebuilding Forum is a series of events on current and overarching challenges and trends in peacebuilding. Thus, the **aim** is to provide future-oriented impulses for the **development of peacebuilding** and strengthen the visibility and importance of the policy field in its entirety.",
      aboutTheProjectText: "The project was **completely done by me**, using the existent codebase of FriEnt which was developed using **Jamstack** (Gatsby + Contentful), we did our data queries using **GraphQL** and for the styling we used **Bootstrap** combined with **Sass**",
      companyColor: "#f2f2f2",
      image: {
        src: icons.PbfLogoIcon,
        srcLight: icons.PbfLogoLightIcon,
        alt: "pbf-logo",
        isSquare: true
      },
      detailPagePath: "/pbf",
      technologies: [ "React", "HTML 5", "CSS 3", "Bootstrap", "Javascript", "Git", "Api", "Sass", "Gatsby", "Contentful", "GraphQL", "Azure DevOps" ],
    },
    {
      headline: "Secovisa",
      url: "https://secovisa.com/",
      aboutTheCompanyText: "Secovisa, a **Jerez based** company provides specialized services to their customers, which range from the supply of all types of **spare parts**, **machinery and accessories** up to the execution of **repairs** or “turn-key” **installations**.",
      aboutTheProjectText: `We created a tailor-made **PWA** app for the custome for their backoffice and for their workers. The value of the app was to provide a way for the administration of the different work orders of the company and for the control of clocking by its employees.  
      For the execution we use **React** with **Sass** for the front-end, **Firebase** as database and Firebase **Cloud Functions** to get some calcs done`,
      companyColor: "#f3f7fa",
      image: {
        src: icons.SecovisaLogoIcon,
        alt: "secovisa-logo",
      },
      projectImages: [
        {
          src: SecovisaImg,
          alt: "secovisa-dashboard",
        },
        {
          src: SecovisaMobileImg,
          alt: "secovisa-mobile",
        },
      ],
      detailPagePath: "/secovisa",
      technologies: [ "React", "HTML 5", "CSS 3", "Javascript", "Git", "Api", "Sass", "Firebase", "Azure DevOps" ],
    },
    {
      headline: "TeleData",
      url: "https://www.teledata.de/",
      aboutTheCompanyText: "Teledata GmbH is a **German** company which operates as a regional **internet and services provider**. The Company offers internet and telephony, location networking, data center solutions, smart services, cloud products, and fiber optic connections.",
      aboutTheProjectText: "We developed a web app to help their customer service, which was executed using **React** with **Bootstrap/Sass** for the front-end which was connected to a C# back-end via **API** calls.",
      companyColor: "#f8f9fa",
      image: {
        src: icons.TeledataLogoIcon,
        srcLight: icons.TeledataLogoLightIcon,
        alt: "teledata-logo",
      },
      projectImages: [
        {
          src: TeledataImg,
          alt: "teledata-dashboard",
        },
        {
          src: TeledataBankImg,
          alt: "teledata-bank-dashboard",
        },
      ],
      detailPagePath: "/teledata",
      technologies: [ "React", "HTML 5", "CSS 3", "Javascript", "Git", "Api", "Sass", "Bootstrap", "Azure DevOps" ],
    },
    {
      headline: "Vier",
      url: "https://www.vier.ai/",
      aboutTheCompanyText: "VIER GmbH was formed in 2021 from the **merger** of the companies 4Com, voiXen, parlamind, Lindenbaum and PRECIRE. The communication technology specialists have **combined their years of expertise** and in-depth knowledge. VIER sees itself as a pioneer for the future of intelligent, communication-driven work.",
      aboutTheProjectText: `The project was developed using **Jamstack** (Gatsby + Contentful), we did our data queries using **GraphQL** and for the styling we used **Bootstrap** combined with **Sass**.  
      I joined the project in a latest status and I help to implement some feature requests from the customer`,
      companyColor: "#f8f9fa",
      image: {
        src: icons.VierLogoIcon,
        alt: "vier-logo",
      },
      detailPagePath: "/vier",
      technologies: [ "React", "HTML 5", "CSS 3", "Bootstrap", "Javascript", "Git", "Api", "Sass", "Gatsby", "Contentful", "GraphQL", "Azure DevOps" ],
    },
    {
      headline: "VetZ",
      url: "https://www.vetz.vet/",
      aboutTheCompanyText: "They have been amongst the leading providers of **practice management software**, **web applications** and **digital X-ray systems** in veterinary medicine. Their **image management software** facilitate and optimise the everyday life of the practice, and the business processes of our customers and partners, in all areas of animal health",
      aboutTheProjectText: "I joined the project for do some feature request to it. The project was developed using **Jamstack** (Gatsby + Contentful), we did our data queries using **GraphQL** and for the styling we used **TailwindCSS** combined with **Headless UI** components and **Sass**",
      companyColor: "#482d5a",
      image: {
        src: icons.VetzLogoIcon,
        alt: "vetz-logo",
      },
      projectVideoURL: "https://res.cloudinary.com/dxvqa4ck2/video/upload/v1700313128/vetz-apple-like-scroll-animation.mp4",
      detailPagePath: "/vetz",
      technologies: [ "React", "HTML 5", "CSS 3", "Javascript", "Contentful", "Git", "Sass", "Azure DevOps", "Tailwind CSS", "GSAP" ],
    },
  ],
  es: [
    {
      headline: "Corona Warn App",
      url: "https://www.coronawarn.app/",
      aboutTheProjectText: "La aplicación Corona-Warn-App del **gobierno alemán** es una aplicación de rastreo de contactos de COVID-19 diseñada para notificar a los usuarios si han estado cerca de alguien que más tarde dé positivo en las pruebas del virus. Su objetivo es mejorar los esfuerzos de la salud pública identificando y alertando rápidamente a las personas en riesgo de infección.\n #### Puntos clave:\n * Basada en tecnologías con un enfoque **descentralizado**\n * **E2E testing** a través de **Cypress**\n * **La transparencia** es clave tanto para proteger a los usuarios finales de la aplicación como para fomentar su adopción.",
      companyColor: "#54b3e1",
      image: {
        src: icons.CwaLogoIcon,
        alt: "cwa-logo",
      },
      detailPagePath: "/cwa",
      technologies: [ "Javascript", "HTML 5", "CSS 3", "Cypress", "Git", "Bootstrap", "Handlebars", "jQuery" ],
    },
    {
      headline: "iF Design",
      url: "https://ifdesign.com/",
      aboutTheCompanyText: "**Introducido en 1954**, el iF Design Award es un prestigioso concurso internacional de diseño que reconoce los logros más destacados en diversas categorías de diseño. Ganar el iF Design Award significa la **excelencia e innovación en el diseño**, mostrando las excepcionales cualidades estéticas y funcionales de un producto o proyecto.",
      aboutTheProjectText: "El proyecto fue desarrollado usando **Jamstack** (Gatsby + Contentful), para las consultas de datos usamos **GraphQL**, para el styling usamos **Sass** y conectamos múltiples APIs alojadas en Azure (las cuales obtienen información a través de **Elasticsearch**) a nuestro front-end\n #### Puntos clave: \n * Realizamos el proyecto **desde cero** y fue evolucionado a lo largo del tiempo teniendo múltiples relanzamientos\n * Tuve el placer de haber trabajado en él **desde el principio** y hasta los primeros lanzamientos\n * Debido a la enorme cantidad de datos, combina la funcionalidad **SSR** de Gatsby V4 con la generación habitual de **páginas estáticas** de Gatsby\n * También estuve **involucrado** en su **último relanzamiento** en septiembre de 2023",
      companyColor: "#da1720",
      image: {
        src: icons.IfLogoIcon,
        alt: "iF-logo",
        isSquare: true
      },
      detailPagePath: "/if-design",
      technologies: [ "React", "HTML 5", "CSS 3", "Cypress", "Javascript", "Git", "Api", "Sass", "Gatsby", "Contentful", "GraphQL", "Azure DevOps" ],
    },
    {
      headline: "Vimcar",
      url: "https://vimcar.de/",
      aboutTheCompanyText: "Vimcar es una empresa con sede en **Alemania** que ofrece soluciones innovadoras de gestión de flotas, especializada en **seguimiento de vehículos** y **registros digitales de kilometraje**. Los servicios de Vimcar dotan a las empresas de herramientas eficaces para gestionar y supervisar sus flotas, mejorando la transparencia operativa y optimizando el uso general de los vehículos. Más de 100.000 vehículos ya confían en su solución SaaS para ayudarles a funcionar de forma más eficiente, incluidas empresas como Allianz, Zalando y Hertha BSC.",
      aboutTheProjectText: "Me uní al proyecto tan pronto como empecé a trabajar en Digital Cuisine y fue genial ya que fue mi primer proyecto profesional como **full-stack**. Usamos **HTML/Handlebars** y **Sass** para el front-end, **Contentful** como CMS y **NodeJs** con **Express** para el backend. \n #### Puntos clave:\n * El proyecto fue creciendo y acabamos teniendo múltiples proyectos dentro del principal: [careers](https://careers.vimcar.com/de/), [partnership](https://partner.vimcar.de/), [web de Austria](https://vimcar.at/), [web de UK](https://vimcar.co.uk/)... \n * Me encantó que después de proponerlo, tuve la oportunidad de implementar **Cypress** para el **E2E testing** del proyecto\n * Trabajar con múltiples automatizaciones a través de **Zapier**\n * Creamos algunas campañas de correo electrónico a través de **Mailchimp**\n * Los deployements se manejaron a través de **Jenkins**\n * En este momento estamos **migrando** la mayor parte del contenido de **Contentful** a **Webflow**.",
      companyColor: "#14BCF1",
      image: {
        src: icons.VimcarLogoIcon,
        alt: "vimcar-logo",
      },
      detailPagePath: "/vimcar",
      technologies: [ "HTML 5", "CSS 3", "Cypress", "Javascript", "Git", "Api", "Sass", "Express", "Contentful", "Nodejs", "Handlebars", "Azure DevOps", "Zapier", "Jenkins", "Gulp", "jQuery", "Webflow" ],
    },
    {
      headline: "Avrios",
      url: "https://www.avrios.com/",
      aboutTheCompanyText: "Avrios es una empresa con sede en **Suiza** que ofrece una plataforma integral de gestión de flotas. Especializada en automatizar y agilizar las tareas relacionadas con las flotas, proporciona a las empresas herramientas para gestionar activos, hacer un seguimiento de los gastos y garantizar el cumplimiento de la normativa. El objetivo de la plataforma es simplificar las operaciones de las flotas, fomentando la eficiencia y la rentabilidad de las organizaciones con diversas flotas de vehículos.",
      aboutTheProjectText: "Trabajando con Avrios tuvimos la posibilidad de trabajar en nuestro primer **proyecto completo de Webflow**.\n #### Puntos clave:\n * Hicimos una **migración** de su sitio web de Wordpress a Webflow\n * Trabajamos en varios proyectos de la empresa usando Webflow\n * **Superamos** la limitación del \"custom code\" que tiene implicita Webflow alojando código en repos privados y sirviéndolo después vía script",
      companyColor: "#00003e",
      image: {
        src: icons.AvriosLogoIcon,
        alt: "avrios-logo",
      },
      detailPagePath: "/avrios",
      technologies: [ "CSS 3", "Webflow", "Javascript", "Git", "Api", "Zapier" ],
    },
    {
      headline: "FriEnt",
      url: "https://frient.de/",
      aboutTheCompanyText: "FriEnt, abreviatura de \"Friedensentwicklung\" en alemán, es una organización dedicada a la consolidación de la paz y el desarrollo. FriEnt colabora con diversos agentes, incluidas ONG y organismos gubernamentales, para **promover iniciativas de desarrollo sostenible y paz.**",
      aboutTheProjectText: "El proyecto fue desarrollado usando **Jamstack** (Gatsby + Contentful), realizamos las consultas de datos usando **GraphQL** y para los estilos usamos **Bootstrap** combinado con **Sass**\n #### Puntos clave:\n * Me uní al proyecto en un estado avanzado y trabajé en algunas **feature requests**\n * Hicimos algunas campañas de correo electrónico usando **Sendinblue**.",
      companyColor: "#e7e8ec",
      image: {
        src: icons.FrientLogoIcon,
        srcLight: icons.FrientLogoLightIcon,
        alt: "frient-logo",
      },
      detailPagePath: "/frient",
      technologies: [ "React", "HTML 5", "CSS 3", "Bootstrap", "Javascript", "Git", "Api", "Sass", "Gatsby", "Contentful", "GraphQL", "Azure DevOps" ],
    },
    {
      headline: "Bahlsen",
      url: "https://www.bahlsen.com/",
      aboutTheCompanyText: "Bahlsen es una empresa alemana de alimentos reconocida por sus galletas de **alta calidad**. Con una rica herencia que se remonta a **1889**, Bahlsen es conocida por productos icónicos como Choco Leibniz y las galletas Hit. La marca representa un compromiso con la artesanía e ingredientes premium, ofreciendo deliciosas galletas que se han convertido en un básico en los hogares europeos.",
      aboutTheProjectText: `Este fue uno de los primeros proyectos en los que trabajé en Digital Cuisine junto con Vimcar. Creamos el sitio web **desde cero** y colaboramos estrechamente con la agencia de diseño de Reino Unido Mullenlowe desde el principio.  
      El proyecto se basa en la combinación de HTML/Handlebars + Sass + JS.\n #### Aspectos clave:\n * Se creó como un sitio web **"fullscreen scrolling website"**, siendo que el scroll está en su mayoría regulado por secciones\n * Gran variedad de **animaciones** realizadas exclusivamente con CSS.`,
      companyColor: "#ffffff",
      image: {
        src: icons.BahlsenLogoIcon,
        srcLight: icons.BahlsenLogoLightIcon,
        alt: "bahlsen-logo",
      },
      detailPagePath: "/bahlsen",
      technologies: [ "React", "HTML 5", "CSS 3", "Javascript", "Git", "Sass", "Azure DevOps", "Handlebars", "Gulp", "jQuery" ],
    },
    {
      headline: "Peacebuilding Forum (PBF)",
      url: "https://www.frient-peacebuilding-forum.de/",
      aboutTheCompanyText: "FriEnt Peacebuilding Forum es una serie de eventos sobre desafíos y tendencias actuales y generales en la construcción de la paz. El **objetivo** es proporcionar impulsos orientados al futuro para el desarrollo de la **construcción de la paz** y fortalecer la visibilidad e importancia del campo político en su totalidad.",
      aboutTheProjectText: "El proyecto fue **completamente realizado por mí**, utilizando la base de código existente de FriEnt, que se desarrolló utilizando **Jamstack** (Gatsby + Contentful). Realizamos nuestras consultas de datos utilizando **GraphQL** y para lost estilos utilizamos **Bootstrap** combinado con **Sass**.",
      companyColor: "#f2f2f2",
      image: {
        src: icons.PbfLogoIcon,
        srcLight: icons.PbfLogoLightIcon,
        alt: "pbf-logo",
        isSquare: true
      },
      detailPagePath: "/pbf",
      technologies: [ "React", "HTML 5", "CSS 3", "Bootstrap", "Javascript", "Git", "Api", "Sass", "Gatsby", "Contentful", "GraphQL", "Azure DevOps" ],
    },
    {
      headline: "Secovisa",
      url: "https://secovisa.com/",
      aboutTheCompanyText: "Secovisa, una empresa con **sede en Jerez**, ofrece servicios especializados que van desde el suministro de todo tipo de **repuestos**, **maquinaria y accesorios**, hasta la ejecución de **reparaciones o instalaciones** 'llave en mano'.",
      aboutTheProjectText: `Creamos una aplicación **PWA** a medida para el cliente, tanto para su backoffice como para sus trabajadores. El valor de la aplicación residia en ser el medio para la administración de las diferentes órdenes de trabajo de la empresa y el control de fichaje por parte de sus empleados.  
      Para la ejecución, utilizamos **React** con **Sass** para el front-end, **Firebase** como base de datos y Firebase **Cloud Functions** para realizar algunos cálculos.`,
      companyColor: "#f3f7fa",
      image: {
        src: icons.SecovisaLogoIcon,
        alt: "secovisa-logo",
      },
      projectImages: [
        {
          src: SecovisaImg,
          alt: "secovisa-dashboard",
        },
        {
          src: SecovisaMobileImg,
          alt: "secovisa-mobile",
        },
      ],
      detailPagePath: "/secovisa",
      technologies: [ "React", "HTML 5", "CSS 3", "Javascript", "Git", "Api", "Sass", "Firebase", "Azure DevOps" ],
    },
    {
      headline: "TeleData",
      url: "https://www.teledata.de/",
      aboutTheCompanyText: "Teledata GmbH es una empresa **alemana** que opera como proveedor regional de **internet y servicios**. La empresa ofrece internet y telefonía, redes de ubicación, soluciones de centro de datos, servicios inteligentes, productos en la nube y conexiones de fibra óptica.",
      aboutTheProjectText: "Desarrollamos una aplicación web para ayudar a su servicio de atención al cliente, que se ejecutó utilizando **React** con **Bootstrap/Sass** para el front-end, conectado a un backend en C# al que accediamos mediante llamadas a los **endpoints** proporcionados.",
      companyColor: "#f8f9fa",
      image: {
        src: icons.TeledataLogoIcon,
        srcLight: icons.TeledataLogoLightIcon,
        alt: "teledata-logo",
      },
      projectImages: [
        {
          src: TeledataImg,
          alt: "teledata-dashboard",
        },
        {
          src: TeledataBankImg,
          alt: "teledata-bank-dashboard",
        },
      ],
      detailPagePath: "/teledata",
      technologies: [ "React", "HTML 5", "CSS 3", "Javascript", "Git", "Api", "Sass", "Bootstrap", "Azure DevOps" ],
    },
    {
      headline: "Vier",
      url: "https://www.vier.ai/",
      aboutTheCompanyText: "VIER GmbH se formó en 2021 a partir de la **fusión** de las empresas 4Com, voiXen, parlamind, Lindenbaum y PRECIRE. Los especialistas en tecnología de la comunicación han **combinado sus años de experiencia y conocimientos** profundos en el sector. VIER se ve a sí misma como pionera para el futuro del trabajo inteligente y basado en la comunicación.",
      aboutTheProjectText: `El proyecto se desarrolló utilizando **Jamstack** (Gatsby + Contentful), realizamos nuestras consultas de datos utilizando **GraphQL** y para el estilo utilizamos **Bootstrap** combinado con **Sass**.  
      Me uní al proyecto en un estado avanzado y ayudé a implementar algunas feature requests del cliente.`,
      companyColor: "#f8f9fa",
      image: {
        src: icons.VierLogoIcon,
        alt: "vier-logo",
      },
      detailPagePath: "/vier",
      technologies: [ "React", "HTML 5", "CSS 3", "Bootstrap", "Javascript", "Git", "Api", "Sass", "Gatsby", "Contentful", "GraphQL", "Azure DevOps" ],
    },
    {
      headline: "VetZ",
      url: "https://www.vetz.vet/",
      aboutTheCompanyText: "Han sido uno de los principales proveedores de **software de gestión de consultas**, **aplicaciones web** y **sistemas de radiografía digital** en medicina veterinaria. Su **software de gestión de imágenes** facilita y optimiza la vida cotidiana de la práctica y los procesos comerciales de sus clientes y socios en todas las áreas de la salud animal.",
      aboutTheProjectText: "Me uní al proyecto para realizar algunas solicitudes de funciones. El proyecto se desarrolló utilizando **Jamstack** (Gatsby + Contentful), realizamos nuestras consultas de datos utilizando **GraphQL** y para el estilo utilizamos **Tailwind CSS** combinado con componentes **Headless UI** y **Sass**.",
      companyColor: "#482d5a",
      image: {
        src: icons.VetzLogoIcon,
        alt: "vetz-logo",
      },
      projectVideoURL: "https://res.cloudinary.com/dxvqa4ck2/video/upload/v1700313128/vetz-apple-like-scroll-animation.mp4",
      detailPagePath: "/vetz",
      technologies: [ "React", "HTML 5", "CSS 3", "Javascript", "Contentful", "Git", "Sass", "Azure DevOps", "Tailwind CSS", "GSAP" ],
    },
  ],
}

export const PERSONAL_PROJECT_ITEMS: Record<string, Array<ProjectItemStructure>> = {
  en: [
    {
      headline: "Actual portfolio",
      url: "/",
      aboutTheProjectText: `In the last months of 2023 I was sure that I wanted a **change on my career**, so that's why I started developing my actual portfolio. I developed it using **Next.js** and **Typescript** as base, **Sass** for the styling and **GSAP** and **Intersection Observer API** for handle some scrolling animations.  
      For this project, I wanted to create a functional portfolio for sure, but I also wanted to learn/improve some of my skills so that 's why I used the latest version of Next.js (>13.4) which allows you to use the new **App Router** and also thing like **Server Components**. Along with this I also took the **opportunity** to use Typescript, which was something I had wanted to do for a long time and hadn't had the chance to do.  
      Regarding the portfolio **design**, I have tried to keep it simple, but with some curiosities like the random color that accompanies you throughout your visit and changes every time you visit it.  
      Finally and despite being my professional portfolio, I did not want to lose the humor that I like to have, so there are certain texts in it that have a somewhat **humorous tone**, especially in the about me section.`,
      image: {
        src: PortfolioV2Img,
        alt: "portfoliov2-screenshot",
      },
      detailPagePath: "/portfolioV2",
      technologies: [ "React", "HTML 5", "CSS 3", "Javascript", "Git", "Sass", "Next.js", "GSAP", "Cypress", "Typescript" ],
      isPersonalProject: true
    },
    {
      headline: "City game",
      url: "https://juego-ciudades-paises.vercel.app/",
      aboutTheProjectText: `**Minimalist design** game that consists on **placing a marker** for different European capitals on a map. At this moment it has 11 capitals but it would be **easily scalable**. You start with 1500km, and each wrong result (> 50km), will rest you the kilometers that you have moved away from the requested location. If you reach the end with some kilometer in your account... you will have won!  
      The game was done using **Next.js** (pages router), and doing **API** calls to check the distances between the real location of the city and the one the user placed on the map`,
      image: {
        src: CityGameImg,
        alt: "city-game-screenshot",
      },
      detailPagePath: "/city-game",
      technologies: [ "React", "HTML 5", "CSS 3", "Javascript", "Git", "Sass", "Next.js", "Api" ],
      isPersonalProject: true
    },
    {
      headline: "My first portfolio",
      url: "https://awesome-bohr-f950bd.netlify.app/",
      aboutTheProjectText: `This was my first portfolio, done near 4 years ago now... and looking back to it there are a lot of things that I will in a different way today, but this is also the great part, because it means that I **evolved as a developer** ❤️  
      The project was done with **Gatsby**, **Strapi** as CMS and using **Sass** for the styling. There you will be able to see some of my first projects (and as I have seen some external APIs are not longer working, see "React Node Send" and "Song Lyrics Finder")`,
      image: {
        src: PortfolioV1Img,
        alt: "portfoliov1-screenshot",
      },
      detailPagePath: "/portfolioV1",
      technologies: [ "React", "HTML 5", "CSS 3", "Javascript", "Git", "Api", "Sass", "Gatsby", "Strapi" ],
      isPersonalProject: true
    },
  ],
  es: [
    {
      headline: "Portfolio actual",
      url: "/",
      aboutTheProjectText: `En los últimos meses de 2023, estaba seguro que quería un **cambio en mi carrera**, por lo que comencé a desarrollar el portfolio que estás visitando. Lo desarrollé utilizando **Next.js** y **Typescript** como base, **Sass** para los estilos y **GSAP** y **Intersection Observer API** para manejar algunas animaciones al hacer scroll.
      Para este proyecto, quería crear un portfolio funcional por supuesto, pero también quería aprender/mejorar algunas de mis habilidades, por eso utilicé la última versión de Next.js (>13.4) que permite usar el nuevo **App Router** y también novedades como los **Server Components**. Junto con esto, también aproveché la **oportunidad** para usar Typescript, algo que había querido utilizar en algún proyecto durante mucho tiempo y no había tenido la oportunidad de hacerlo.
      En cuanto al **diseño** del portfolio, he tratado de mantenerlo simple, pero con algunas curiosidades como el color aleatorio que te acompaña durante tu visita y cambia cada vez que lo visitas la página.
      Finalmente, a pesar de ser mi portfolio profesional, no quería perder el humor que me gusta tener, así que hay ciertos textos en él que tienen un ligero tono humorístico, especialmente en la sección sobre mí.`,
      image: {
        src: PortfolioV2Img,
        alt: "portfoliov2-screenshot",
      },
      detailPagePath: "/portfolioV2",
      technologies: [ "React", "HTML 5", "CSS 3", "Javascript", "Git", "Sass", "Next.js", "GSAP", "Cypress", "Typescript" ],
      isPersonalProject: true
    },
    {
      headline: "Juego de capitales",
      url: "https://juego-ciudades-paises.vercel.app/",
      aboutTheProjectText: `Juego de **diseño minimalista** que consiste en **colocar un marcador** para diferentes capitales europeas en un mapa. En este momento tiene 11 capitales, pero sería **fácilmente escalable**. Comienzas con 1500 km y cada resultado incorrecto (> 50 km) te resta los kilómetros que te has alejado de la ubicación solicitada. Si llegas al final con algunos kilómetros en tu cuenta... ¡habrás ganado!
      El juego se hizo utilizando **Next.js* (con una versión anterior, utilizando pages router) y haciendo llamadas a **APIs** para verificar las distancias entre la ubicación real de la ciudad y la que el usuario colocó en el mapa.`,
      image: {
        src: CityGameImg,
        alt: "city-game-screenshot",
      },
      detailPagePath: "/city-game",
      technologies: [ "React", "HTML 5", "CSS 3", "Javascript", "Git", "Sass", "Next.js", "Api" ],
      isPersonalProject: true
    },
    {
      headline: "Mi primer portfolio",
      url: "https://awesome-bohr-f950bd.netlify.app/",
      aboutTheProjectText: `Este fue mi primer portfolio, hecho hace cerca de 4 años... y mirándolo ahora, hay muchas cosas que haría de manera diferente, pero sin embargo está es a su vez la parte que me encanta, porque significa que **evolucioné como desarrollador** ❤️.  
      El proyecto se realizó con **Gatsby**, **Strapi** como CMS y usando **Sass** para los estilos. Allí podrás ver algunos de mis primeros proyectos (por lo que he visto, tras tantos años, algunas APIs externas ya no funcionan, como por ejemplo en los proyectos de "React Node Send" y el buscador de letras).`,
      image: {
        src: PortfolioV1Img,
        alt: "portfoliov1-screenshot",
      },
      detailPagePath: "/portfolioV1",
      technologies: [ "React", "HTML 5", "CSS 3", "Javascript", "Git", "Api", "Sass", "Gatsby", "Strapi" ],
      isPersonalProject: true
    },
  ],
}

export const QUOTES_404: Record<string, Array<QuoteItem>> = {
  en: [
    {
      quote: "That men do not learn very much from the lessons of history is the most important of all the lessons of history.",
      author: "Aldous Huxley",
    },
    {
      quote: "The secret of genius is to carry the spirit of the child into old age, which means never losing your enthusiasm.",
      author: "Aldous Huxley",
    },
    {
      quote: "There is only one corner of the universe you can be certain of improving, and that's your own self.",
      author: "Aldous Huxley",
    },
    {
      quote: "The universe is a pretty big place. If it's just us, seems like an awful waste of space.",
      author: "Carl Sagan",
      source: "Contact",
    },
    {
      quote: "Imagination will often carry us to worlds that never were, but without it we go nowhere.",
      author: "Carl Sagan",
      source: "Cosmos",
    },
    {
      quote: "Stand out of the sun.",
      author: "Diogenes of Sinope",
      source: "after Alexander the great addressed him with greetings, and asked if he wanted anything",
    },
  ],
  es: [
    {
      quote: "Quizá la lección más grande de la historia es que nadie aprendió las lecciones de la historia.",
      author: "Aldous Huxley",
    },
    {
      quote: "El secreto de la genialidad es el de conservar el espíritu del niño hasta la vejez, lo cual quiere decir nunca perder el entusiasmo.",
      author: "Aldous Huxley",
    },
    {
      quote: "Existe un rincón del universo que con toda seguridad puedes mejorar, y eres tú mismo.",
      author: "Aldous Huxley",
    },
    {
      quote: "El universo es un lugar bastante grande. Si solo estamos nosotros, seguro sería una terrible pérdida de espacio.",
      author: "Carl Sagan",
      source: "Contacto",
    },
    {
      quote: "La imaginación a menudo nos llevará a mundos que nunca existieron, pero sin ella no iremos a ninguna parte.",
      author: "Carl Sagan",
      source: "Cosmos",
    },
    {
      quote: "Pues aparta, que me tapas el sol.",
      author: "Diógenes de Sinope",
      source: "después de que Alejandro Magno le dijera que estaría encantado de hacer por el filósofo cualquier cosa que estuviera en su mano",
    },
  ]
}

export const CVLinks: Record<string, Array<BannerCta>> = {
  en: [
    {
      text: "English Resumee",
      href: "https://res.cloudinary.com/dxvqa4ck2/image/upload/v1700312837/Daniel-Cano-EN-CV.pdf"
    },
    {
      text: "Spanish Resumee",
      href: "https://res.cloudinary.com/dxvqa4ck2/image/upload/v1700312837/Daniel-Cano-ES-CV.pdf"
    }
  ],
  es: [
    {
      text: "Curriculum en Español",
      href: "https://res.cloudinary.com/dxvqa4ck2/image/upload/v1700312837/Daniel-Cano-ES-CV.pdf"
    },
    {
      text: "Curriculum en Inglés",
      href: "https://res.cloudinary.com/dxvqa4ck2/image/upload/v1700312837/Daniel-Cano-EN-CV.pdf"
    }
  ]
}