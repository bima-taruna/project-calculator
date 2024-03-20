const add = require("./add")

describe("add", () => {
    test("add 2 number", () => {
        expect(add(1, 2)).toEqual(3)
    })
})