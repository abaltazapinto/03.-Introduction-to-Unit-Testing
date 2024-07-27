class User {
    firstName;
    lastName;
    middleName;
    
    constructor(data = {}){
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.middleName = data.middleName || '';
    }
} 
 
/* Unit Testing: It Test Challenge
*
*   1. Write a unit test for lastName and middleName to test its default values.
*   2. Group all 3 unit tests with an appropriate describe.
*/

// Test Suite 

/**
 * Test suite
*/

describe(`${User.name} Class`, () => {
    describe('default values', () => {
        it('first name defaults to empty', () => {
            //arrange
            const data = { firstName: null };

            //act 
            const model = new User(data);

            //assert
            expect(model.firstName).toBe('');
        });

        it('last name defaults to empty', () => {
            //arrange
            const data = { lastName: null };
        
            //act 
            const model = new User(data);

            //assert
            expect(model.lastName).toBe('');
        })

        it('middle name defaults to empty', () => {
            //arrange
            const data = { middleName: null };
        
            //act 
            const model = new User(data);

            //assert
            expect(model.middleName).toBe('');
        })
    }) ;
})