describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working arithmetical operations', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '12');
  })

  // could also possibly write individual tests to show every aritmetical operation is functioning

  it('should be able to chain multiple operations together', () => {
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '20');
  })

  it('should output a negative number', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-6');
  })

  it('should ouput a decimal number', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.25');
  })

  it('should output a very large number', () => {
    cy.get('#number9').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4650');
  })

  it("should output the string 'error' when dividing numbers by 0", () => {
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error');
  })
})