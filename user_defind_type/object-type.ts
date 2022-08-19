

let students: object[]
students = [];

let user1: { userName: string, userId: number };
user1 = { userName: "asad", userId: 2 };
students.push(user1)


let user2: { userName: string, userId: number };
user2 = { userName: "asad", userId: 2 };

students.push(user2)

for (const key in students) {
    console.log(students[key]["userName"]);

}