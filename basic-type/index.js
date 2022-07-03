// number string boolean void nundfind null
var studentId;
var firstName;
var lastName;
var fullname;
var age;
studentId = 101;
firstName = "md";
lastName = " asaduzzaman";
age = 20;
fullname = firstName.concat(lastName);
console.log("your id is ".concat(studentId, " name: ").concat(fullname, ", age: ").concat(age, " "));
console.log(fullname.split(' '));
console.log(fullname.toLowerCase());
console.log(fullname.toUpperCase());
var display = function () {
    console.log(" hi i am arrow function");
};
display();
var bdArea = function () {
    return (147570);
};
console.log(bdArea());
var student = function () {
    return (" i am from bangladesh");
};
console.log(student());
