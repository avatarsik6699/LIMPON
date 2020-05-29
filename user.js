class User {
    constructor(name, logger, kate) {
        this.log = `${logger} by the way`;
        this._name = name + 'This man';
        this.kate = kate;
    }

    getFullInfo() {
        console.log(`${this._name} + ${this.log} + ${this.kate}`)
    };
}

module.exports = User;