//  Unit Testing: Mocks

// Test Suite 
describe(`${User.name} Class`, () => {
    let model;
    
    beforeEach(() => {
        const data = { firstName: 'Dylan', middleName: 'Christopher', lastName: 'Israel', id: 1 };
        model = new User(data, {});
    });

    describe('getMyFullUserData', () => {
        it('gets user data by id', () => {

        });
    });
});
