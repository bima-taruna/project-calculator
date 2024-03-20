const digits = document.querySelectorAll(".digit")
const display = document.querySelector(".display")
const resetButton = document.querySelector(".ac")
const addButton = document.querySelector(".add")
const resultButton = document.querySelector(".result")
let displayArr = []
let firstNum;
let secondNum;
let result;


digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (displayArr.length < 9) {
            if (digit.classList.contains("operations")) {
                displayArr.push(digit.textContent)
                display.textContent = displayArr.join("")
                secondNum = parseInt(displayArr.join(""))
                console.log(secondNum)
            } else {
                displayArr.push(digit.textContent)
                display.textContent = displayArr.join("")
                firstNum = parseInt(displayArr.join(""))
                console.log(firstNum)
            }
        }
    })
})

resetButton.addEventListener("click", () => {
    displayArr = []
    display.textContent = "0"
})

addButton.addEventListener("click", () => {
    displayArr = []
    digits.forEach((item) => {
        item.classList.add("operations")
    })
    resultButton.classList.add("add")
})

resultButton.addEventListener("click", () => {
    if (resultButton.classList.contains("add")) {
        result = add(firstNum, secondNum)
        display.textContent = result
        displayArr = []
        firstNum = ""
        secondNum = ""
        digits.forEach((digit) => {
            digit.classList.remove("operations")
        })
    }
})

const add = (num1, num2) => {
    return num1 + num2
}


