const analyzeArray = require('../code/analyzeArray')


describe('test', () => {

    test('get error msg when array is emty', () => {
        expect(analyzeArray([])).toBe('Array is emty')
    })

    test('get object from analyzer function', () => {
        expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        })
    })

    test('get object from analyzer function', () => {
        expect(analyzeArray([4, 12, 63, 2, 125, 88, 6, 34, 76])).toStrictEqual({
            average: 45, // 45
            min: 2,
            max: 125,
            length: 9
        })
    })

})
