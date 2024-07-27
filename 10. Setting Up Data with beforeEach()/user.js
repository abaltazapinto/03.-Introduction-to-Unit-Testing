export default class User {
    firstName;
    lastName;
    middlename;

    constructor(data = {}) {
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.middlename = data.middlename || '';
    }
}

