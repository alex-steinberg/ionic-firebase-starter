describe('Login page', () => {
    it('successfully loads', () => {
        cy.visit('/');
    });
    it('displays the login page', () => {
        cy.contains('Login');
    })
});