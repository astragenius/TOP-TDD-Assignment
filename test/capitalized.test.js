const capitalized = require('../code/capitalized')

test('reverse string', () => {

    expect(capitalized('ab')).toBe('Ab');
});

test('reverse string test 2', () => {
    expect(capitalized('test')).toBe('Test');
});

test('reverse string test 3', () => {
    expect(capitalized('testString')).toBe('Teststring');
})

test('reverse string test 4', () => {
    expect(capitalized('daDFADvdsd')).toBe('Dadfadvdsd')
})