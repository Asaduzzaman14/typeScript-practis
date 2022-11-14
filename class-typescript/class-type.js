var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("user name: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
// class object
// user1 - name: asad, age 20
// user1 - name: asad, age 22
var user1 = new User("Asaduzzaman", 20);
user1.display();
var user2 = new User("MD Asaduzzaman", 22);
user2.display();
