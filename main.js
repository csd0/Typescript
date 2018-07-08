var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
// var emailBox = document.createElement('input');
// emailBox.setAttribute('value', 'Enter your email');
// emailBox.setAttribute('onFocus', "if(this.value == 'Enter your email') { this.value = ''; }");
// emailBox.setAttribute('type','email');
// let button = document.createElement('button');
// button.textContent = "Subscribe";
// button.onclick = function() {
//     alert(greeter.greet());
// }
// document.body.appendChild(emailBox);
// document.body.appendChild(button);
