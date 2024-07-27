import User from './user.js';
 
//arranje and act are in the before each :) !!!!!
describe(`${User.name} Class`, () => {
    let model;

    beforeEach(() => {
        model = new User();
    });

    describe('default values', () => {
        it('first name defaults to empty', () => {
            //assert
            expect(model.firstName).toBe('');
        });

        it('last name defaults to empty', () => {
            //assert
            expect(model.lastName).toBe('');
        })

        it('middle name defaults to empty', () => {
            //assert
            expect(model.middleName).toBe('');
        })
    }) ;
})