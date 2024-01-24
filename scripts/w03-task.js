/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(x, y) {
    return x + y;
}

// function addNumbers()
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    let sumResult = add(addNumber1, addNumber2);
    document.getElementById("sum").value = sumResult.toFixed(2);
}

// Add event listener after defining addNumbers
document.getElementById("addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */

// Function Expression for Subtraction
const subtract = function(minuend, subtrahend) {
    return minuend - subtrahend;
};

// Function Expression for subtractNumbers
const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    let differenceResult = subtract(subtractNumber1, subtractNumber2);
    document.getElementById("difference").value = differenceResult.toFixed(2);
};

// Event listener for the subtractNumbers button
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */

// Arrow Function for Multiplication
const multiply = (factor1, factor2) => factor1 * factor2;

// Arrow Function for multiplyNumbers
const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    let productResult = multiply(factor1, factor2);
    document.getElementById("product").value = productResult.toFixed(2);
};

// Event listener for the multiplyNumbers button
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (x, y) => x / y;

const divideNumbers =() => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient.toFixed(2);
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */

function getTotal(){
    //input
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    //processing
    if (document.getElementById("member").checked) {
        subtotal = subtotal - subtotal * 0.2; //20% discount
    }
    //output
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */



/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
