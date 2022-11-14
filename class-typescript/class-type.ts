class User {

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

// class object
// user1 - name: asad, age 20
// user1 - name: asad, age 22

let user1 = new User("Asaduzzaman", 20)
user1.display()

let user2 = new User("MD Asaduzzaman", 22)
user2.display()
