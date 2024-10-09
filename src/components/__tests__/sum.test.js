const { sum } = require("../sum")

test('To check the sum function ', () => { 
    const result = sum(2,2)
    
    expect(result).toBe(4)
 })