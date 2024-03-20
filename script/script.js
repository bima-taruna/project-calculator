const digits = document.querySelectorAll(".digit")
const display = document.querySelector(".display")
const resetButton = document.querySelector(".ac")
const displayArr = []
let firstNum;
let secondNum;

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (displayArr.length < 9) {
            displayArr.push(digit.textContent)
            display.textContent = displayArr.join("")
        }
    })
})

resetButton.addEventListener("click", () => {
    displayArr = []
    display.textContent = "0"
})


