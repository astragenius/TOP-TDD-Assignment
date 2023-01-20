const reverse = require('../code/reversedString')


test('reverse String Test 1', () => {

    expect(reverse('Hallo')).toBe('ollaH');
});
test('reverse String Test 2', () => {
    expect(reverse('   Hallo')).toBe('ollaH');
})
test('reverse String Test 3', () => {
    expect(reverse('Hallo Welt!')).toBe('!tleW ollaH')
})
