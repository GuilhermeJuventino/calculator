// Calculator script

var previousNumber = document.getElementById("previousNumber").innerHTML;

var currentNumber = document.getElementById("currentNumber").innerHTML;

//var value1 = 0;
//var value2 = 0;
var operand = document.getElementById("operand").innerHTML;

//alert(typeof operand)

//alert(calcText);

function calcWrite(item) {
    // Writing to calculator screen
    if ((item === "+") || (item == "-")
        || (item === "/") || (item == "*")) {
            operand = item;
            document.getElementById("operand").innerHTML = item;
    }
}