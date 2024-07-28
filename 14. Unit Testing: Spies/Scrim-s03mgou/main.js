// Unit Testing: Spies

// Test Suite 
describe(`${User.name} Class`, () => {
    let model;
    
    beforeEach(() => {
        model = new User();
    });

    describe('say my name', () => {
        it('alerts the full name of user', () => {
            // arrange
            model.firstName = "André"
            model.lastName = "Pinto";
            spyOn(window, 'alert');
            // act
            model.sayMyName();
            // assert
            expect(window.alert).toHaveBeenCalled();
            expect(window.alert).toHaveBeenCalledWith('André Pinto');
        });
    });
});