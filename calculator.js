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
    return operator(a, b);
}

// Make buttons look like they're being pushed
const buttons = document.querySelectorAll("button");
for(button of buttons) {
    button.addEventListener("mousedown", buttonDown);
    button.addEventListener("mouseup", buttonUp);
    button.addEventListener("mouseleave", buttonUp);
}
function buttonDown(button) {
    if (button.target.classList.contains("operator")) {
        button.target.classList.add("buttonDownOperator");
    } else if (button.target.classList.contains("number")) {
        button.target.classList.add("buttonDownNumber");
    } else if (button.target.classList.contains("clear")) {
        button.target.classList.add("buttonDownClear");
    }
}
function buttonUp(button) {
    if (button.target.classList.contains("operator")) {
        button.target.classList.remove("buttonDownOperator");
    } else if (button.target.classList.contains("number")) {
        button.target.classList.remove("buttonDownNumber");
    } else if (button.target.classList.contains("clear")) {
        button.target.classList.remove("buttonDownClear");
    }
}