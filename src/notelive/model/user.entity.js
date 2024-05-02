export class User {
    constructor(id, username, password, firstname, lastname, phonenumber, email, usertype, membership) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
        this.email = email;
        this.usertype = usertype;
        this.membership = membership;
    }
}
