class User {

    // public, private, proceted, readonly
    // protected userName: string; // protected 
    // private userName: string;  
    public userName: string;
    public age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display(): void {
        console.log(`user name: ${this.userName}, age: ${this.age}`);

    };
}


class Student extends User {
    private studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age)
        this.studentId = studentId;

    }
    display(): void {
        console.log(`user name: ${this.userName}, age: ${this.age}, this is student id ${this.studentId}`);

    }

    setStudentId(id: number): void {
        this.studentId = id
    }
    getStudentId(): number {
        return this.studentId
    }

}



let student1 = new Student("sakib", 19, 101)
// student1.display()

student1.setStudentId(72)

console.log(student1.getStudentId());
console.log(student1.display());


let user2 = new User("rakib", 34)
// user2.userName = " Hridoy"
// console.log(user2);


// user2.display()