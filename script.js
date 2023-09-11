// Calculator script

var previousNumber = document.getElementById("previousNumber").innerHTML;

var currentNumber = document.getElementById("currentNumber").innerHTML;

//var value1 = 0;
//var value2 = 0;
var currentOperand = document.getElementById("operand").innerHTML;

//alert(typeof currentNumber)

//alert(calcText);

function calcWrite(item) {
    // Writing to calculator screen
    if (item === ".") {
        if (!toString(currentNumber).includes(".")) {
            currentNumber = currentNumber + ".";
            document.getElementById("currentNumber").innerHTML = currentNumber;
        }
    } else {
            currentNumber = currentNumber + item;
            document.getElementById("currentNumber").innerHTML = currentNumber;
    }
}

function clearCalc() {
    // Clearing calculator's fields
    previousNumber = "0";
    currentNumber = "0";
    operand = "";

    document.getElementById("previousNumber").innerHTML = previousNumber;
    document.getElementById("currentNumber").innerHTML = currentNumber;
    document.getElementById("operand").innerHTML = operand;
}

function setOperand(operand) {
    // Choosing calculation's operand and setting the current number to previous number
    if ((operand === "+") || (operand == "-")
        || (operand === "/") || (operand == "*")) {
            currentOperand = operand;
            document.getElementById("operand").innerHTML = currentOperand;

            previousNumber = currentNumber;
            currentNumber = "0";
            document.getElementById("previousNumber").innerHTML = previousNumber;
            document.getElementById("currentNumber").innerHTML = currentNumber;
        }
}

function calculateResult() {
    let n1 = parseInt(previousNumber);
    let n2 = parseInt(currentNumber);

    if (previousNumber == 0) {
        return;
    }

    switch (currentOperand) {
        case "+":
            currentNumber = add(n1, n2);
            previousNumber = "0";
            document.getElementById("currentNumber").innerHTML = currentNumber;
            document.getElementById("previousNumber").innerHTML = previousNumber;
            break;

        case "-":
            currentNumber = subtract(n1, n2);
            previousNumber = "0";
            document.getElementById("currentNumber").innerHTML = currentNumber;
            document.getElementById("previousNumber").innerHTML = previousNumber;
            break;

        case "*":
            currentNumber = multiply(n1, n2);
            previousNumber = "0";
            document.getElementById("currentNumber").innerHTML = currentNumber;
            document.getElementById("previousNumber").innerHTML = previousNumber;
            break;

        case "/":
            currentNumber = divide(n1, n2);
            previousNumber = "0";
            document.getElementById("currentNumber").innerHTML = currentNumber;
            document.getElementById("previousNumber").innerHTML = previousNumber;
            break;
    
        default:
            break;
    }
}

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    if (n2 == 0) {
        alert("Impossible to divide by zero...");
        return 0;
    } else {
        return n1 / n2;
    }
}