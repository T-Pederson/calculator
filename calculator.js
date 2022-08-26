function add(a, b) {
    return parseInt(a) + parseInt(b);
}


function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}


function operate(operator, a, b) {
    if (operator === "÷") {
        operator = divide;
    }
    else if (operator === "x") {
        operator = multiply;
    }
    else if (operator === "-") {
        operator = subtract;
    }
    else if (operator === "+") {
        operator = add;
    }
    let solution = operator(a, b);
    // Return "ERROR" if output is not a number
    if (isNaN(solution) || typeof solution !== 'number') {
        return "ERROR";
    } else {
        // if solution contains more than 9 numbers return scientific notation
        if (solution.toString().replace('.', '').length > 9) {
            solution = solution.toExponential(0);
            return solution;
        } else {
            return solution;
        }
    }
}


// Add event listeners to buttons
const buttons = document.querySelectorAll("button");
for(button of buttons) {
    button.addEventListener("mousedown", buttonDown);
    button.addEventListener("mousedown", calculate);
    button.addEventListener("mouseleave", buttonUp);
    button.addEventListener("mouseup", buttonUp);
}


// Make buttons look like they're being pushed
function buttonDown(button) {
    if (button.target.classList.contains("operator") || button.target.classList.contains("operate")) {
        button.target.classList.add("buttonDownOperator");
    } else if (button.target.classList.contains("number") || button.target.classList.contains("decimal")) {
        button.target.classList.add("buttonDownNumber");
    } else if (button.target.classList.contains("CLEAR")) {
        button.target.classList.add("buttonDownClear");
    }
}


// Make buttons go back to normal after released
function buttonUp(button) {
    if (button.target.classList.contains("operator") || button.target.classList.contains("operate")) {
        button.target.classList.remove("buttonDownOperator");
    } else if (button.target.classList.contains("number") || button.target.classList.contains("decimal")) {
        button.target.classList.remove("buttonDownNumber");
    } else if (button.target.classList.contains("CLEAR")) {
        button.target.classList.remove("buttonDownClear");
    }
}


// Start tracking variables
let firstNumber;
let secondNumber;
let operator;
let firstInput = true;


// Handle all scenarios of button presses for the calculator
function calculate(button) {
    let result = document.querySelector(".result").innerText;
    const pushed = button.target.innerText;
    if (firstNumber === undefined || firstNumber === "ERROR") {
        if (result === "0") {
            if (pushed === '÷' || pushed === 'x' || pushed === '-' || pushed === '+') {
                firstNumber = result;
                operator = pushed;
            } else if (pushed === ".") {
                document.querySelector(".result").innerText += ".";
            } else if (typeof parseInt(pushed) === 'number' && !isNaN(parseInt(pushed))) {
                document.querySelector(".result").innerText = pushed;
            }
        } else {
            if (pushed === '÷' || pushed === 'x' || pushed === '-' || pushed === '+') {
                firstNumber = result;
                operator = pushed;
            } else if (pushed === 'CLEAR') {
                document.querySelector(".result").innerText = "0";
            } else if (pushed === ".") {
                if (result.includes(".") === false && result.replace('.', '').length < 9) {
                    document.querySelector(".result").innerText += ".";
                }
            } else if (typeof parseInt(pushed) === 'number' && !isNaN(parseInt(pushed))) {
                if (result.replace('.', '').length < 9) {
                    document.querySelector(".result").innerText += pushed;
                }
            }
        }
    } else {
        if (result === "0") {
            if (pushed === '÷' || pushed === 'x' || pushed === '-' || pushed === '+') {
                secondNumber = result;
                document.querySelector(".result").innerText = operate(operator, firstNumber, secondNumber);
                firstNumber = document.querySelector(".result").innerText;
                operator = pushed;
            } else if (pushed === 'CLEAR') {
                firstNumber = undefined;
                operator = undefined;
                firstInput = true;
            } else if (pushed === ".") {
                document.querySelector(".result").innerText += ".";
                firstInput = false;
            } else if (pushed === "=") {
                secondNumber = result;
                document.querySelector(".result").innerText = operate(operator, firstNumber, secondNumber);
                firstNumber = document.querySelector(".result").innerText;
                firstInput = true;
            } else if (typeof parseInt(pushed) === 'number' && !isNaN(parseInt(pushed))) {
                if (result.replace('.', '').length < 9) {
                    if (firstInput === true) {
                        document.querySelector(".result").innerText = pushed;
                    }
                }
            }
        } else {
            if (pushed === '÷' || pushed === 'x' || pushed === '-' || pushed === '+') {
                secondNumber = result;
                document.querySelector(".result").innerText = operate(operator, firstNumber, secondNumber);
                firstNumber = document.querySelector(".result").innerText;
                operator = pushed;
                firstInput = true;
            } else if (pushed === 'CLEAR') {
                firstNumber = undefined;
                operator = undefined;
                firstInput = true;
                document.querySelector(".result").innerText = "0";
            } else if (pushed === ".") {
                if (result.includes(".") === false && result.replace('.', '').length < 9) {
                    if (firstInput === true) {
                        document.querySelector(".result").innerText = "0.";
                        firstInput = false;
                    } else {
                        document.querySelector(".result").innerText += ".";
                    }
                }
            } else if (pushed === "=") {
                secondNumber = result;
                document.querySelector(".result").innerText = operate(operator, firstNumber, secondNumber);
                firstNumber = document.querySelector(".result").innerText;
                firstInput = true;
            } else if (typeof parseInt(pushed) === 'number' && !isNaN(parseInt(pushed))) {
                if (firstInput === true) {
                    document.querySelector(".result").innerText = pushed;
                    firstInput = false;
                } else {
                    if (result.replace('.', '').length < 9) {
                        document.querySelector(".result").innerText += pushed;
                    }
                }
            }
        }
    }
}