// number string boolean void nundfind null

let studentId: number;
let firstName: string;
let lastName: string;
let fullname: string;
let age: number;


studentId = 101;
firstName = "md";
lastName = " asaduzzaman";
age = 20
fullname = firstName.concat(lastName)

console.log(`your id is ${studentId} name: ${fullname}, age: ${age} `);

console.log(fullname.split(' '));
console.log(fullname.toLowerCase());
console.log(fullname.toUpperCase());

const display = (): void => {
    console.log(" hi i am arrow function");

}
display()

const bdArea = (): number => {
    return (147570);

}
console.log(bdArea());

const student = (): string => {
    return (" i am from bangladesh");

}
console.log(student());


