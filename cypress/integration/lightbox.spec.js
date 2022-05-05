/// <reference types="cypress" />
context('Lightbox', () => {
    beforeEach(() => {
        cy.visit('app/lightbox.html');
    });
    it('h1 should have text Lightbox', () => {
        cy.get('h1').should('have.text', 'Lightbox');
    });
    it('click on image open LightBox', () => {
        cy.get('[data-cy="openLightBox"]').click();
    });
    it('click out of the image to close the LightBox', () => {
        cy.get('[data-cy="openLightBox"]').click();
        cy.get('[data-cy="closeLightBox"]').click();
    });
    it('Like and count of likes equal to 1', () => {
        cy.get('[data-cy="openLightBox"]').click();
        cy.get('[data-cy="like"]').click();
        cy.get('[data-cy="likeCountInImage"]').should("have.text", 1);
        cy.get('[data-cy="closeLightBox"]').click();
        cy.get('[data-cy="likeCountOverlay"]').should("have.text", 1);
    });
    it('Dislike and count of likes equal to 0', () => {
        cy.get('[data-cy="openLightBox"]').click();
        cy.get('[data-cy="like"]').click();
        cy.get('[data-cy="likeCountInImage"]').should("have.text", 1);
        cy.get('[data-cy="dislike"]').click();
        cy.get('[data-cy="likeCountInImage"]').should("have.text", 0);
        cy.get('[data-cy="closeLightBox"]').click();
        cy.get('[data-cy="likeCountOverlay"]').should("have.text", 0);
    });
}); 