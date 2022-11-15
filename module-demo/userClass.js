"use strict";
exports.__esModule = true;
exports.User = void 0;
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
exports.User = User;
