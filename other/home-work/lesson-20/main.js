"use strict";

class SuperMath {
    check(obj) {
        if (!this.#confirm(obj)) {
            return this.#getNewObj();
        }

        return this.#calculate(obj);
    }

    #getNewObj() {
        const obj = { X: 0, Y: 0, znak: "" };

        obj.X = +prompt("Enter the first number", 0);
        obj.Y = +prompt("Enter the second number", 0);

        do {
            obj.znak = prompt("Enter the sign of the operation", "+");
        } while (!["+", "-", "*", "/", "%"].includes(obj.znak));

        return this.check(obj);
    }

    #confirm(obj) {
        return confirm(
            `Do you want to make a calculation ${obj.znak} with numbers ${obj.X} and ${obj.Y}?`
        );
    }

    #calculate(obj) {
        let res = "";
        switch (obj.znak) {
            case "+":
                res = obj.X + obj.Y;
                break;
            case "-":
                res = obj.X - obj.Y;
                break;
            case "*":
                res = obj.X * obj.Y;
                break;
            case "/":
                res = obj.X / obj.Y;
                break;
            case "%":
                res = obj.X % obj.Y;
                break;
            default:
                res = "Error";
        }

        return alert(`Result: ${res}`);
    }
}

const sm = new SuperMath();
sm.check({ X: 5, Y: 10, znak: "+" });
