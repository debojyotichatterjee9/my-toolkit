class User {
    id: string;
    firstName: string;
    lastName: string;

    constructor(userObj: {
        id: string;
        firstName: string;
        lastName: string;
    }) {
        this.id = userObj.id;
        this.firstName = userObj.firstName;
        this.lastName = userObj.lastName;
    }
}

export default User;