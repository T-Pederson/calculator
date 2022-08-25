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
    // Restrict value to 9 numbers
        // round decimal if needed to fit number
        // output scientific notation if needed to fit number
    // Return "NaN" if output is not a number
    return operator(a, b);
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
firstNumber = null;
secondNumber = null;
operator = null;

// Handle all scenarios of different button presses for the calculator, to occur on mouse down event
function calculate(button) {
    // if firstNumber === null
        // if display === 0
            // if number was pushed
                // clear display 
                // put in new number to the display
            // else if operator was pushed
                // store the display value to firstNumber
                // store the operator clicked to operator
            // else if clear was pushed
                // if decimal in number
                    // reset display to 0
            // else if decimal was pushed
                // if display contains decimal
                    // add decimal to number
        // else if display is a number
            // if number was pushed
                // add number to the display text
            // else if operator was pushed
                // store display value to firstNumber
                // store the operator clicked to operator
            // else if clear was pushed
                // reset display to 0
            // else if decimal was pushed
                // if no decimal in number yet
                    // add decimal to number
    // else 
        // if display === 0
            // if number was pushed
                // clear display
                // put in new number to the display
            // else if operator was pushed
                // set secondNumber to display value
                // change display to operate(operator, firstNumber, secondNumber)
                // change firstNumber to display value
                // change operator to operator that was pushed
            // else if clear was pushed
                // if display contains decimal
                    // reset display to 0
                // else
                    // reset firstNumber to null
                    // reset operator to null
            // else if decimal was pushed
                // if no decimal in number yet
                    // add decimal to number
            // else if operate was pushed
                // set secondNumber to display value
                // change display to operate(operator, firstNumber, secondNumber)
                // change firstNumber to display value
        // else
            // if number was pushed
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