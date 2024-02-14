import { handleSubmit } from '../src/client/js/formHandler';
import { createCard } from '../src/client/js/createCard';

// Mocking the DOM elements and their values
document.body.innerHTML = `
  <form id="tripForm">
    <input type="text" id="destination" value="Test Destination">
    <input type="text" id="start" value="2024-02-13T00:00:00">
    <button type="submit" id="submitBtn">Submit</button>
  </form>
`;

// Mocking fetch responses
global.fetch = jest.fn((url) => {
    if (url === '/geo') {
        return Promise.resolve({
            json: () => Promise.resolve({ countryName: 'Test Country' })
        });
    } else if (url === '/img') {
        return Promise.resolve({
            json: () => Promise.resolve({ imgURL: 'http://test.com/test.jpg' })
        });
    }
});

// Mocking localStorage
Storage.prototype.setItem = jest.fn();

// Mocking createCard function
jest.mock('../src/client/js/createCard', () => ({
    createCard: jest.fn()
}));

describe('handleSubmit function', () => {
    test('it should handle form submission', async () => {
        // Mock event object
        const event = {
            preventDefault: jest.fn()
        };

        // Call the handleSubmit function
        await handleSubmit(event);

        // Assertions
        expect(event.preventDefault).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledTimes(2); // Two fetch calls
        expect(fetch).toHaveBeenCalledWith('/geo', expect.any(Object));
        expect(fetch).toHaveBeenCalledWith('/img', expect.any(Object));
        expect(Storage.prototype.setItem).toHaveBeenCalledWith(
            'TripDataMap',
            expect.any(String)
        );
        expect(createCard).toHaveBeenCalledWith(
            '0',
            expect.any(Object)
        );
    });
});
