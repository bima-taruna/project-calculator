let digits = document.querySelectorAll(".digit")
let display = document.querySelector(".display")
let resetButton = document.querySelector(".ac")
let displayArr = []

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (displayArr.length < 9) {
            displayArr.push(digit.textContent)
            display.textContent = displayArr.join("")
        }
    })
})


