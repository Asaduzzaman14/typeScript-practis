export class User {

    // propertyes, method, constractor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;

    }

    display(): void {
        console.log(`user name: ${this.userName}, age: ${this.age}`);

    }
}
