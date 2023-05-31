var User = /** @class */ (function () {
    function User(userName, age, alive) {
        this.userName = userName;
        this.age = age;
        this.alive = alive;
    }
    User.prototype.showUser = function () {
        if (this.alive === true) {
            console.log("\n        ".concat(this.userName, " is ").concat(this.age, " years old, and is alive\n      "));
        }
        else {
            console.log("\n        ".concat(this.userName, " is ").concat(this.age, " years old, and died\n      "));
        }
    };
    return User;
}());
var user1 = new User('David', 20, true);
var user2 = new User('Olga', 90, false);
user1.showUser();
user2.showUser();
