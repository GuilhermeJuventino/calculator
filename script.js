// Calculator script

var previousNumber = document.getElementById("previousNumber").innerHTML;

var currentNumber = document.getElementById("currentNumber").innerHTML;

//var value1 = 0;
//var value2 = 0;
var operand = document.getElementById("operand").innerHTML;

//alert(typeof currentNumber)

//alert(calcText);

function calcWrite(item) {
    // Writing to calculator screen
    if (item === "0") {
        if (currentNumber != 0) {
            currentNumber = currentNumber.concat("0");
            document.getElementById("currentNumber").innerHTML = currentNumber;
        }
    } else if (item === ".") {
        if (!currentNumber.includes(".")) {
            currentNumber = currentNumber.concat(item);
            document.getElementById("currentNumber").innerHTML = currentNumber;
        }
    } else {
        if (currentNumber == 0) {
            currentNumber = item;
            document.getElementById("currentNumber").innerHTML = currentNumber;
        } else {
            currentNumber = currentNumber.concat(item);
            document.getElementById("currentNumber").innerHTML = currentNumber;
        }
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
    // Choosing calculation's operand and storing the setting the current number to previous number
    if ((operand === "+") || (operand == "-")
        || (operand === "/") || (operand == "*")) {
            let newOperand = operand;
            document.getElementById("operand").innerHTML = newOperand;

            previousNumber = currentNumber;
            currentNumber = "0";
            document.getElementById("previousNumber").innerHTML = previousNumber;
            document.getElementById("currentNumber").innerHTML = currentNumber;
        }
}