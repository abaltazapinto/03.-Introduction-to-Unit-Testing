import User from './user.js';
 
//arranje and act are in the before each :) !!!!!
/* Unit Testing: Setting Up Data with beforeEach Challenge
*   
* 1. Add a new describe for the fullName
* 2. Fully test the fullName get
* 3. Use a nested beforeEach
*/ 

// Test Suite 
describe(`${User.name} Class`, () => {
    let model;
    
    beforeEach(() => {
        model = new User();


    });
    
    describe('default values', () => {
        it('first name defaults to empty', () => {
            // assert
            expect(model.firstName).toBe('');
        });
    
        it('last name defaults to empty', () => {
            // assert
            expect(model.lastName).toBe('');
        });
    
        it('middle name defaults to empty', () => {
            // assert
            expect(model.middleName).toBe('');
        }); 
    });

    describe('fullName', () => {
        beforeEach(() => {
         // just use the class and think on her
         model = new User({ firstName: 'André', lastName: 'Pinto' });
        });
        it('middle initial when the middle name is defined with first and the first letter of the middle name and last', () => {
            //arrange
            model.middleName = 'Baltazar';

            //act
            const result = model.fullName;
            //assert
            expect(result).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`)});

        it('when the middle name is not defined with first and last', () => {
            //arrange
            model.middleName = '';

            //act
            const result = model.fullName;
            //assert
            expect(result).toBe(`${model.firstName} ${model.lastName}`);
        
        });
    })
});

