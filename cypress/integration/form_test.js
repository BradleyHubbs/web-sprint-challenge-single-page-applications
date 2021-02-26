describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]')
    const sizeInput = () => cy.get('select[name=size]')
    const instructionsInput = () => cy.get('input[name=size]')
    const pepperoniInput = () => cy.get('input[name=pepperoni]')
    const meatballInput = () => cy.get('input[name=meatball]')
    const onionInput = () => cy.get('input[name=onion]')
    const sausageInput= () => cy.get('input[name=sausage]')
    const submitBtn = () => cy.get('button[id=submitBtn]')

    it('sanity check', () => {
        expect(1+1).to.equal(2)
    })

    it('application check', () => {
        nameInput().type('B-Rad')
        sizeInput().select('small')
        pepperoniInput().click()
        onionInput().click()
        submitBtn().click()
    })

})