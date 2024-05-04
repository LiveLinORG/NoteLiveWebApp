export class Pinmodel {
    constructor(pin) {
        this.pins = pin.pins;
        this.usersID = pin.usersID.map(user => user.id);
        this.creator = pin.creator.id;
        this.id = pin.id;
    }
}
