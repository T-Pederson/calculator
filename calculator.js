function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}


function operate(operator, a, b) {
    let solution = operator(a, b);
    // Return "ERROR" if output is not a number
    if (isNaN(solution) || typeof solution !== 'number') {
        return "ERROR";
    } else {
        // if solution contains more than 9 numbers
            // return scientific notation of solution to fit number
        // else
            // return solution;
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
    } else if (button.target.classList.contains("clear")) {
        button.target.classList.add("buttonDownClear");
    }
}


// Make buttons go back to normal after released
function buttonUp(button) {
    if (button.target.classList.contains("operator") || button.target.classList.contains("operate")) {
        button.target.classList.remove("buttonDownOperator");
    } else if (button.target.classList.contains("number") || button.target.classList.contains("decimal")) {
        button.target.classList.remove("buttonDownNumber");
    } else if (button.target.classList.contains("clear")) {
        button.target.classList.remove("buttonDownClear");
    }
}


// Start tracking variables
let firstNumber;
let secondNumber;
let operator;


// Handle all scenarios of button presses for the calculator
function calculate(button) {
    let result = document.querySelector(".result").innerText;
    const pushed = button.target.innerText;
    if (firstNumber === undefined) {
        if (result === "0") {
            if (pushed === '÷' || pushed === 'x' || pushed === '-' || pushed === '+') {
                firstNumber = result;
                operator = pushed;
            }
            else if (pushed === ".") {
                document.querySelector(".result").innerText += ".";
            }
            else if (typeof parseInt(pushed) === 'number' && !isNaN(parseInt(pushed))) {
                document.querySelector(".result").innerText = pushed;
            }
        }
        else if (typeof parseInt(result) === 'number' && !isNaN(parseInt(result))) {
            if (pushed === '÷' || pushed === 'x' || pushed === '-' || pushed === '+') {
                firstNumber = result;
                operator = pushed;
            }
            else if (pushed === 'CLEAR') {
                document.querySelector(".result").innerText = "0";
            }
            else if (pushed === ".") {
                if (result.includes(".") === false && result.replace('.', '').length < 9) {
                    document.querySelector(".result").innerText += ".";
                }
            }
            else if (typeof parseInt(pushed) === 'number' && !isNaN(parseInt(pushed))) {
                if (result.replace('.', '').length < 9) {
                    document.querySelector(".result").innerText += pushed;
                }
            }
        }
    } else {
        // if display === "0"
            // if number was pushed
                // clear display
                // put in new number to the display
            // else if operator was pushed
                // set secondNumber to display value
                // change display to operate(operator, firstNumber, secondNumber)
                // change firstNumber to display value
                // change operator to operator that was pushed
            // else if clear was pushed
                // reset firstNumber to undefined
                // reset operator to undefined
            // else if decimal was pushed
                // add decimal to number
            // else if operate was pushed
                // set secondNumber to display value
                // change display to operate(operator, firstNumber, secondNumber)
                // change firstNumber to display value
        // else if display is a number other than "0"
            // if number was pushed
                // if display contains less than 9 numbers
                    // add number to the display text
            // else if operator was pushed
                // set secondNumber to display value
                // change display to operate(operator, firstNumber, secondNumber)
                // change firstNumber to display value
                // change operator to operator that was pushed
            // else if clear was pushed
                // reset display to 0
            // else if decimal was pushed
                // if no decimal in number yet
                    // add decimal to number
            // else if operate was pushed
                // set secondNumber to display value
                // change display to operate(operator, firstNumber, secondNumber)
                // change firstsNumber to display value
    }
}