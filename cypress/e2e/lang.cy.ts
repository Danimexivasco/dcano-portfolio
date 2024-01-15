import { pageUrls } from "../support/constants"

describe("Localization tests", () => {
  beforeEach(() => {
    cy.visit(pageUrls[ 0 ])
  })

  context("General", () => {
    it("should have english as default language", () => {
      cy.dataCy("usa-flag").should("be.visible")
      cy.get("[data-cy='hero-text-content'] .cy-sub-headline")
        .should("have.text", "I craft digital experiences: Front-end alchemist at your service")
    })
  })

  context("Dekstop", () => {
    it("should have language selector dropdown hidden at start", () => {
      cy.dataCy("language-dropdown").should("not.be", "visible")
    })
  
    it("should have spanish option available in the dropdown", () => {
      cy.get("[data-cy='language-dropdown']").contains("ES")
    })

    it("should change language on click", () => {
      cy.dataCy("spain-flag").click({ force: true })
      cy.get("[data-cy='hero-text-content'] .cy-sub-headline")
        .should("have.text", "Elaboro experiencias digitales: Alquimista Front-end a tu servicio")
    })
  })

  context("Mobile", () => {
    beforeEach(() => {
      cy.viewport("iphone-6")
      cy.visit(pageUrls[ 0 ])
    })
    it("should have spanish option available in the lateral menu", () => {
      cy.get(".hamburger-react").click()
      cy.get("[data-cy='mobile-language-selector']").contains("ES")
    })

    it("should change language on touch", () => {
      cy.get(".hamburger-react").click()
      cy.dataCy("spain-flag").click({ force: true })
      cy.get("[data-cy='hero-text-content'] .cy-sub-headline")
        .should("have.text", "Elaboro experiencias digitales: Alquimista Front-end a tu servicio")
    })
  })
})