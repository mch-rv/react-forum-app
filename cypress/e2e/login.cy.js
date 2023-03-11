/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('button').contains(/^Login$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"Email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Email"]').type('ujang@ujang.com');
    cy.get('button').contains(/^Login$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"Password" is not allowed to be empty');
    });
  });
  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="Email"]').type('ujang@ujang.com');
    cy.get('input[placeholder="Password"]').type('wrong_password');
    cy.get('button').contains(/^Login$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('User ID or password is wrong');
    });
  });
  it('should display homepage when email and password are correct', () => {
    cy.get('input[placeholder="Email"]').type('ujang@ujang.com');
    cy.get('input[placeholder="Password"]').type('123123');
    cy.get('button').contains(/^Login$/).click();
    cy.get('nav').contains(/^Home$/).should('be.visible');
    cy.get('nav').contains(/^Leaderboards$/).should('be.visible');
    cy.get('button').contains('Sign out').should('be.visible');
  });
});
