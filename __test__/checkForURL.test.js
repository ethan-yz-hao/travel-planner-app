import { isURL } from '../src/client/js/checkForURL';
describe('isURL function', () => {
    test('should return true for a valid URL', () => {
        const validURL = 'https://www.example.com';
        expect(isURL(validURL)).toBe(true);
    });

    test('should return false for an empty input', () => {
        const emptyInput = '';
        expect(isURL(emptyInput)).toBe(false);
    });

    test('should return false for a blank input', () => {
        const blankInput = '   ';
        expect(isURL(blankInput)).toBe(false);
    });

});