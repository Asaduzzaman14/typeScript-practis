type User = { userName: string, userId: number }

let students: User[]
students = [];


let user1: User
user1 = { userName: "asad", userId: 1 };
students.push(user1)


let user2: User;
user2 = { userName: "Md asad", userId: 2 };

students.push(user2)


let user3: User;
user3 = { userName: "sakib", userId: 3 };

students.push(user3)
// console.log(students);


type Requestype = "GET" | "POST"


let getRequest: Requestype;

getRequest = "GET";
function requesthandler(requestType: Requestype) {
    console.log(requestType);

}
requesthandler("GET")