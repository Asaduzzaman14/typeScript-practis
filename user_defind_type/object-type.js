var students;
students = [];
var user1;
user1 = { userName: "asad", userId: 1 };
students.push(user1);
var user2;
user2 = { userName: "Md asad", userId: 2 };
students.push(user2);
var user3;
user3 = { userName: "sakib", userId: 3 };
students.push(user3);
var getRequest;
getRequest = "GET";
function requesthandler(requestType) {
    console.log(requestType);
}
requesthandler("GET");
