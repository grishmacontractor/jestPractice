import colors from '../checkArray'

test('the shopping list has beer on it', () => {
    expect(colors).toContain('pink');
});