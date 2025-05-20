[![Code Validation Pipeline](https://github.com/Danimexivasco/dcano-portfolio/actions/workflows/pipeline.yml/badge.svg)](https://github.com/Danimexivasco/dcano-portfolio/actions/workflows/pipeline.yml)

# Dcano portfolio

A personal portfolio website built with **Next.js** using the App Router architecture and **Typescript**, **Sass** for the styling and **GSAP** and **Intersection Observer API** for handle some scrolling animations. This site showcases my work, experience, and personal projects. It emphasizes performance, accessibility, and a clean, responsive design.

Finally and despite being my professional portfolio, I did not want to lose the humor that I like to have, so there are certain texts in it that have a somewhat **humorous tone**, especially in the about me section.  

## 👨🏽‍💻 Tech Stack

- **Framework:** [Next.js 14+ (App Router)](https://nextjs.org/docs/app)
- **Styling:** Sass + Sass modules
- **Type Safety:** TypeScript
- **Testing:** [Cypress](https://www.cypress.io/) for E2E
- **CI/CD:** GitHub Actions
- **Hosting:** Vercel

## 🚀 Features

- 🌐 Fully responsive design
- ⚡️ Fast loading using Next.js optimizations
- 🔍 SEO-friendly with dynamic metadata and social sharing tags
- 🧩 Modular, component-based structure
- 🧪 Cypress-based E2E testing suite
- 🔄 Continuous Deployment via GitHub Actions & Vercel
- ♻️ Built with accessibility and semantic HTML in mind

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Danimexivasco/dcano-portfolio.git
```

2. **Install dependencies**

```bash
cd dcano-portfolio

pnpm install
# or
npm install
```

3. **Run the app**

```bash
pnpm dev
# or
npm run dev
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  

## 🧪 Tests

```bash
pnpm cypress:open # opens the Cypress Test Runner
# or
pnpm cypress:run # runs tests in headless mode
```