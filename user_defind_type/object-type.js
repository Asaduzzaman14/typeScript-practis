var students;
students = [];
var user1;
user1 = { userName: "asad", userId: 2 };
students.push(user1);
var user2;
user2 = { userName: "asad", userId: 2 };
students.push(user2);
for (var key in students) {
    console.log(students[key]["userName"]);
}
