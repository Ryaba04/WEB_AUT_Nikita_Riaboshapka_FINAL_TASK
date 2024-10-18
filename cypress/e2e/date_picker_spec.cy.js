describe('Date Picker Test', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/date-picker');
    });

    it('should select February 28, 2013, at 12:00 PM', () => {
        cy.get('#datePickerMonthYearInput').click();
        cy.get('.react-datepicker__year-select').select('2013');
        cy.get('.react-datepicker__month-select').select('February');
        cy.get('.react-datepicker__day').contains('28').click();
        cy.get('#datePickerMonthYearInput').should('have.value', '01/28/2013'); // Проверка на MM/DD/YYYY
        
        cy.get('#dateAndTimePickerInput').clear().type('October 17, 2024 12:00 PM'); // Очистка поля перед вводом
        cy.get('#dateAndTimePickerInput').should('have.value', 'October 17, 2024 12:00 PM'); // Проверка на корректное значение
    });
});
