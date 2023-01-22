const calculator = require('../code/calculator');

describe('Testing the Sum method', () => {

    test('throw error when input not a number', () => {
        function errorTest() {
            calculator.sum('hello', 'world')
        }
        expect(errorTest).toThrow('Input its not a number')
    })
    
    test('sum of 1 + 1', () => {
        expect(calculator.sum(1, 1)).toBe(2)
    })
    test('sum of 10 + 2', () => {
        expect(calculator.sum(10, 2)).toBe(12)
    })
    test('sum floating number', () => {
        expect(calculator.sum(23.23, 12.34)).toBe(35.57)
    })
    test('sum of negative numbers', () => {
        expect(calculator.sum(-5, -5)).toBe(-10)
    })
    test('sum of 1 string number as argument', () => {
        expect(calculator.sum('5', 5)).toBe(10)
    })
    test('sum of 2 string numbers as arguments', () => {
        expect(calculator.sum('5', '5')).toBe(10)
    })

})
describe('Test of sub method', () => {

    
    test('throw error when input not a number', () => {
        function errorTest() {
            calculator.subtract('hello', 'world')
        }
        expect(errorTest).toThrow('Input its not a number')
    })
    
    test('sub of 1 - 1', () => {
        expect(calculator.subtract(1, 1)).toBe(0)
    })
    test('sub of 23 - 10', () => {
        expect(calculator.subtract(23, 10)).toBe(13)
    })
    test('sub of floating number', () => {
        expect(calculator.subtract(40.23, 20.21)).toBe(20.02)
    })
    test('sub of negative numbers', () => {
        expect(calculator.subtract(-10, -5)).toBe(-5)
    })
    test('sub of 1 string number as argument', () => {
        expect(calculator.subtract('10', 5)).toBe(5)
    })
    test('sub of 2 string number as argument', () => {
        expect(calculator.subtract('20', '10')).toBe(10)
    })

    
})
describe('Test of divide method', () => {
    test('throw error when input not a number', () => {
        function errorTest() {
            calculator.divide('hello', 'world')
        }
        expect(errorTest).toThrow('Input its not a number')
    })
    test('thorw error when divide by zero', () => {
        function errorTest() {
            calculator.divide(5, 0)
        }
        expect(errorTest).toThrow('Its not allowed to divide by zero')
    })
   
    test('div of 20 / 5', () => {
        expect(calculator.divide(20, 5)).toBe(4)
    })
    test('divide floating numbers', () => {
        expect(calculator.divide(44.23, 12.45)).toBe(3.55)
    })
    test('divide negative numbers', () => {
        expect(calculator.divide(-10, -5)).toBe(2)
    })
    test('divide of 1 string number as argument', () => {
        expect(calculator.divide('10', 5)).toBe(2)
    })
    test('divide of 2 string number as argument', () => {
        expect(calculator.divide('20', '10')).toBe(2)
    })



})
describe('Test of multiply method', () => {
    test('throw error when input not a number', () => {
        function errorTest() {
            calculator.multiply('hello', 'world')
        }
        expect(errorTest).toThrow('Input its not a number')
    })
    
    test('multiply of 20 and 5', () => {
        expect(calculator.multiply(20, 5)).toBe(100)
    })
    test('multiply floating numbers', () => {
        expect(calculator.multiply(44.23, 12.45)).toBe(550.66)
    })
    test('multiply negative numbers', () => {
        expect(calculator.multiply(-10, -5)).toBe(50)
    })
    test('multiply of 1 string number as argument', () => {
        expect(calculator.multiply('10', 5)).toBe(50)
    })
    test('multiply of 2 string number as argument', () => {
        expect(calculator.multiply('20', '10')).toBe(200)
    })
    
})
    
    
    
    
    