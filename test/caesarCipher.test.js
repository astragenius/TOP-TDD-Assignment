const cipher = require('../code/caesarCipher')


describe('caesarChiper Test', () => {

    test('single letter', () => {
        expect(cipher('a', 1)).toBe('b')
    })
    
    test('encryption test', () => {
        expect(cipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
    })
    test(' reversing number base on key', () => {
        expect(cipher("boy is moving", 2)).toBe("dqa ku oqxkpi");
      });
})
