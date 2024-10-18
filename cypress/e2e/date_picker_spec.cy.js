describe('Date Picker and Date And Time Test', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/date-picker');
    });

    it('should select February 28, 2013, in Date Picker', () => {
        cy.get('#datePickerMonthYearInput').click();
        cy.get('.react-datepicker__year-select').select('2013');
        cy.get('.react-datepicker__month-select').select('1'); // 1 = февраль
        cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)').click();
        cy.get('#datePickerMonthYearInput').should('have.value', '02/28/2013');
    });

    it('should select February 28, 2013, at 12:00 PM in Date And Time Picker', () => {
        cy.get('#dateAndTimePickerInput').clear().type('February 28, 2013 12:00 PM');
        cy.get('#dateAndTimePickerInput').should('have.value', 'February 28, 2013 12:00 PM');
    });
});
