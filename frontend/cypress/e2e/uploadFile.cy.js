/// <reference types="cypress" />

describe("UploadFile App Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);

    cy.fixture("right-data.csv").then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent,
        fileName: "contentData.csv",
        mimeType: "text/csv",
      });
    });
  });

  it("should upload a correct CSV file", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);

    cy.on("window:alert", (str) => {
      expect(str).to.equal("Data loaded successfully!");
    });
  });

  it("should upload an incorrect CSV file", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);

    cy.fixture("wrong-data.csv").then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent,
        fileName: "contentData.csv",
        mimeType: "text/csv",
      });
    });

    cy.on("window:alert", (str) => {
      expect(str).to.equal("The uploaded CSV file is not in the correct format");
    });
  });

  it("should filter users by name", () => {
    const search = "otavio";
    const field = "name";

    cy.get(`input[name="field"][value=${field}]`).check();

    cy.get('input[name="searchBar"]')
      .type(search)
      .then((sometext) => cy.log(sometext));

    cy.get(".list-users li:first-child .userContent .userName").should(
      "have.text",
      search.toUpperCase()
    );
  });

  it("should filter users by city", () => {
    const search = "são paulo";
    const field = "city";

    cy.get(`input[name="field"][value=${field}]`).check();

    cy.get('input[name="searchBar"]')
      .type(search)
      .then((sometext) => cy.log(sometext));

    cy.get(
      ".list-users li:first-child .userContent .userLocation .userLocationText"
    )
      .invoke("text")
      .should("contain", search.toUpperCase());
  });

  it("should filter users by favorite sport", () => {
    const search = "soccer";
    const field = "favorite_sport";

    cy.get(`input[name="field"][value=${field}]`).check();

    cy.get('input[name="searchBar"]')
      .type(search)
      .then((sometext) => cy.log(sometext));

    cy.get(".list-users li:first-child .userSport .userSportLabel")
      .invoke("text")
      .should("contain", search.toUpperCase());
  });
});
