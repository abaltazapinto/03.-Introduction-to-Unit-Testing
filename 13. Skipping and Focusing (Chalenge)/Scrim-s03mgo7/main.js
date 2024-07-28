/* Unit Testing: Skipping and Focusing Challenge
*
*   1. Listen and hear the importance of what I am about to say.
*   2. Raise your right hand and say, 
*       'I will be a quality developer that protects the code and my sanity.'
*   3. Type out below:
*   'I understand the value testing brings and will help to educate those about it.'
*/

/* 
* Challenge Prompt Here
* ------------------------
* "I understand the value testing brings and will help to educate those about it"
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
    
    describe('full name', () => {
        beforeEach(() => {
           model = new User({ firstName: 'Dylan', lastName: 'Israel' }); 
        });
        
        it('middle initial when middleName is defined with first and last', () => {
            // arrange
            model.middleName = 'Christopher';
            
            // act
            const result = model.fullName;
            
            // assert
            expect(result).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`);
        });
       
        it('when no middle name return just first and last', () => {
           // arrange
           model.middleName = '';
           
           // act
           const result = model.fullName;
           
           // assert
           expect(result).toBe(`${model.firstName} ${model.lastName}`);
        });
    });
});