class Calculator {

    static calcSum(num1, num2) {
        return Number(num1) + Number(num2);
    }

    static calcDeduction(num1, num2) {
        return Number(num1) - Number(num2);
    }

    static calcMultiplication(num1, num2) {
        return Number(num1) * Number(num2);
    }

    static calcDivision(num1, num2) {
        return Number(num1) / Number(num2);
    }

}

let firstNumber = '';
let secondNumber = '';

function getNumber() {
    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;
    let errorCode = 0;

    if (!firstNumber || isNaN(firstNumber)) {
        alert('Please enter the first number!');
        errorCode += 1;
    }

    if (!secondNumber || isNaN(secondNumber)) {
        alert('Please enter the second number!');
        errorCode += 1;
    }
    return errorCode;
}

function calcSum() {
    if (getNumber() === 0) {
        document.getElementById('result').value = Calculator.calcSum(firstNumber, secondNumber);
    }
}

function calcDeduction() {
    if (getNumber() === 0) {
        document.getElementById('result').value = Calculator.calcDeduction(firstNumber, secondNumber);
    }
}

function calcMultiplication() {
    if (getNumber() === 0) {
        document.getElementById('result').value = Calculator.calcMultiplication(firstNumber, secondNumber);
    }
}

function calcDivision() {
    if (getNumber() === 0) {
        if (+secondNumber === 0) {
            alert('Divide by zero is forbidden!');
        } else {
        document.getElementById('result').value = Calculator.calcDivision(firstNumber, secondNumber);
        }
    }
}