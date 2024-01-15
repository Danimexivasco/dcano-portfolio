import { pageUrls } from "../support/constants";


describe("Page load & Navigation tests", () => {
  context("General", () => {
    it("should load pages", () => {
      for (const page of pageUrls) {
        cy.visit(page)
      }
    })
  
    it("should navigate to pages of the header navigation", () => {
      cy.visit(pageUrls[ 0 ])
      cy.dataCy("desktop-nav-item").each($el => {
        cy.wrap($el).invoke("attr", "href")
          .then(href => {
            cy.visit(href)
          })
      })
    })
  })
  
  context("Mobile", () => {
    beforeEach(() => {
      cy.viewport("iphone-6")
      cy.visit(pageUrls[ 0 ])
    })

    it("should have menu hidden at start", () => {
      cy.dataCy("mobile-menu").should("not.be", "visible")
    })

    it("should open and close the menu on hamburger push", () => {
      cy.get(".hamburger-react").click()
      cy.dataCy("mobile-menu").should("be.visible")
      cy.get(".hamburger-react").click()
      cy.dataCy("mobile-menu").should("not.be", "visible")
    })
    
    it("should navigate to menu items", () => {
      cy.get(".hamburger-react").click()
      cy.dataCy("mobile-nav-item").each($el => {
        cy.wrap($el).invoke("attr", "href")
          .then(href => {
            cy.visit(href)
          })
      })
    })
  })
})