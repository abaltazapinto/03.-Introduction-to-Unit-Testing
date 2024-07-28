//  Unit Testing: Mocks

// Test Suite 
describe(`${User.name} Class`, () => {
    let model;
    // you have to crate a mock class
    let mockUserService;
    
    beforeEach(() => {
        mockUserService = {
            lastId: null,   
            user: {},
            getUserById(id) {
                this.lastId = id;
                return this.user;
            }
        }
        const data = { firstName: 'Dylan', middleName: 'Christopher', lastName: 'Israel', id: 1 };
        model = new User(data, mockUserService);
    });

    describe('getMyFullUserData', () => {
        it('gets user data by id', async () => {
            //arrange
            mockUserService.lastId = null;
            mockUserService.user = new User(
                {firstName: 'Andre', middleName: 'Baltazar', lastName: 'Coding God', id: 2 }
            )

            //act 
            const result = await model.getMyFullUserData()

            //assert
            expect(mockUserService.lastId).toBe(1)
        });

        it('getMyFullUserData gets the provided user data', async () => {
            //arrange
            const expectedUserData = new User({
                    firstName: 'Andre',
                    middleName: 'Baltazar',
                    lastName: 'Coding God',
                    id: 2 
                })
            //act
            const result = await model.getUserData();

            //assert
            expect(result.id).toBe(2)     
    });
    });
});
