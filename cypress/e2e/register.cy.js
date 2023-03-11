/**
 * - Register spec
 *   - should display register page correctly
 *   - should display alert when name is empty
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display login page when name, email and password not empty
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register');
  });

  it('should display register page correctly', () => {
    cy.get('input[placeholder="Name"]').should('be.visible');
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Register$/).should('be.visible');
  });

  it('should display alert when name is empty', () => {
    cy.get('button').contains(/^Register$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"Email" is not allowed to be empty');
    });
  });

  it('should display alert when email is empty', () => {
    cy.get('input[placeholder="Name"]').type('tester');
    cy.get('button').contains(/^Register$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"Name" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Name"]').type('tester');
    cy.get('input[placeholder="Email"]').type('tester@tester.com');
    cy.get('button').contains(/^Register$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"Password" is not allowed to be empty');
    });
  });
  it('should display login page when name, email and password not empty', () => {
    cy.get('input[placeholder="Name"]').type('tester');
    cy.get('input[placeholder="Email"]').type('tester@tester.com');
    cy.get('input[placeholder="Password"]').type('tester123');
    cy.get('button').contains(/^Register$/).click();
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });
});
