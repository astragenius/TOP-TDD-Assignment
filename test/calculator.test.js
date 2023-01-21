const calculator = require('../code/calculator');

describe('Testing the Sum method', () => {

    test('throw error when input not a number', () => {
        expect(calculator.sum('hallo', 'welt')).toThrow(new Error('Input its not a number'))
    })
    test('if its a number', () => {
        expect(calculator.sum(1, 1)).toBe(Number)
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
        expect(calculator.sub('hallo', 'welt')).toThrow(new Error('Input its not a number'))
    })
    test('if output is a number', () => {
        expect(calculator.sub(1, 1)).toBe(Number);
    })
    test('sub of 1 - 1', () => {
        expect(calculator.sub(1, 1)).toBe(0)
    })
    test('sub of 23 - 10', () => {
        expect(calculator.sub(23, 10)).toBe(13)
    })
    test('sub of floating number', () => {
        expect(calculator.sub(40.23, 20.21)).toBe(20.02)
    })
    test('sub of negative numbers', () => {
        expect(calculator.sub(-10, -5)).toBe(-5)
    })
    test('sub of 1 string number as argument', () => {
        expect(calculator.sub('10', 5)).toBe(5)
    })
    test('sub of 2 string number as argument', () => {
        expect(calculator.sub('20', '10')).toBe(10)
    })

    
})
describe('Test of divide method', () => {
    test('throw error when input not a number', () => {
        expect(calculator.div('hallo', 'welt')).toThrow(new Error('Input its not a number'))
    })
    test('thorw error when divide by zero', () => {
        expect(calculator.div(5, 0)).toThrow(new Error('Its not allowed to divide by zero'))
    })
    test('if output is a number', () => {
        expect(calculator.div(1, 1)).toBe(Number);
    })
    test('div of 20 / 5', () => {
        expect(calculator.div(20, 5)).toBe(4)
    })
    test('divide floating numbers', () => {
        expect(calculator.div(44.23, 12.45)).toBe(3.55)
    })
    test('divide negative numbers', () => {
        expect(calculator.div(-10, -5)).toBe(2)
    })
    test('divide of 1 string number as argument', () => {
        expect(calculator.div('10', 5)).toBe(2)
    })
    test('divide of 2 string number as argument', () => {
        expect(calculator.div('20', '10')).toBe(2)
    })



})
    
    
    
    
    