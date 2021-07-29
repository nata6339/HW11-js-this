console.log("=========================== #3")
let counter = {
    num: 0,
    showStep: function () {
        return this.num;
    },
    up: function () {
        this.num++;
        return this;
    },
    down: function () {
        this.num--;
        return this;
    }
};

counter.up();
counter.up();
// counter.down();
console.log(counter.showStep());

console.log("=========================== #4")

function Calculator() {

    this.sum = function (num1) {
        return function (num2){
            return num1+num2;
        }
    };
    this.subtract = function (num1) {
        return function (num2){
            return num1-num2;
        }
    };
    this.multiply = function (num1) {
        return function (num2){
            return num1*num2;
        }
    };
    this.divide = function (num1) {
        return function (num2){
            return num1/num2;
        }
    };
}

let calculator = new Calculator();

console.log(calculator.sum(1)(2));
console.log(calculator.subtract(3)(2));
console.log(calculator.multiply(2)(4));
console.log(calculator.divide(15)(3));


