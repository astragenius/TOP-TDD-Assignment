const analyzeArray = require('../code/analyzeArray')


describe('test', () => {

    test('arraytest', () => {
        expect(analyzeArray([1, 2, 3, 4, 5])).toBe('d')
    })
})
