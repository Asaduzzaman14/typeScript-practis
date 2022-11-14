abstract class User {

    // propertyes, method, constractor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;

    }
    abstract display(): void;
}


class Student extends User {

    studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age)
        this.studentId = studentId;

    }
    display(): void {
        console.log(`user name: ${this.userName}, age: ${this.age}, this is student id ${this.studentId}`);

    }

}


let student1 = new Student("sakib", 19, 101)
student1.display()