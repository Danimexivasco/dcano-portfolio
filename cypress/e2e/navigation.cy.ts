/// <reference types="cypress" />
import { pageUrls } from "../support/constants";

describe("Navigation", () => {
  it("should load pages", () => {
    for (const page of pageUrls) {
      cy.visit(page)
    }
  })
})