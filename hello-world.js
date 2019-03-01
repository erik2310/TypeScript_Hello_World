"use strict";
exports.__esModule = true;
var Hello = /** @class */ (function () {
    function Hello() {
        this.hello = "Hello World!";
    }
    Hello.prototype.sayHelloWorld = function () {
        console.log(this.hello);
    };
    return Hello;
}());
exports.Hello = Hello;
