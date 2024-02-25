describe('Footer', () => {
    it('Footer',() => {
        cy.viewport(1280, 1020)
        cy.visit('https://1000and1songs.com/#/')
// Footer
        cy.get('.footer').should('be.visible')         
// Logo    
        cy.get('.footer__logo').should('be.visible')
// Navigation buttons
        cy.contains('.footer', 'Про проєкт').should('be.visible');
        cy.contains('.footer', 'Освітній розділ').should('be.visible');
        cy.contains('.footer', 'Експедиції').should('be.visible');
        cy.contains('.footer', 'Мапа').should('be.visible');
        cy.contains('.footer', 'Новини').should('be.visible');
// Donate button
        cy.get('.footer__donate').should('be.visible')
// Partners
        cy.contains('.footer', 'Наші партнери').should('be.visible');

        cy.get('img[alt="Науково-дослідна лабораторія етномузикології НМАУ"]').should('be.visible')
        cy.get('img[alt="Лабораторія музичної етнології ЛНМА"]').should('be.visible')
        cy.get('img[alt="Baza Trainee Ukraine"]').should('be.visible')
// Documentation
        cy.contains('.footer', 'Звітність').should('be.visible');
        cy.contains('.footer', 'Політика приватності').should('be.visible');
        cy.contains('.footer', 'Правила та умови використання').should('be.visible');
        cy.contains('.footer', 'Контакти').should('be.visible');
// gmail
        cy.get('.contacts__email').should('be.visible')
// social
        cy.get('a[href="https://www.facebook.com/groups/1000Songs/"]').should('be.visible')
        cy.get('a[href="https://www.youtube.com/@Olegmaestro"]').should('be.visible')
// rules
        cy.contains('.footer', 'Розробка BazaTraineeUkraine 2024. Всі права захищені').should('be.visible');
      });
})