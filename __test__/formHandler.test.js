import { handleSubmit } from '../src/client/js/formHandler';

jest.mock('../src/client/js/checkForURL', () => {
    return {
        isURL: jest.fn(() => true),
    };
});

describe('handleSubmit function', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <form>
                <input id="url" value="https://example.com" />
            </form>
            <div id="polarity"></div>
            <div id="subjectivity"></div>
            <div id="snippet"></div>
        `;
    });

    test('should prevent default form submission and fetch data', async () => {
        const event = {
            preventDefault: jest.fn(),
        };

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve({
                        polarity: 'positive',
                        subjectivity: 'neutral',
                        snippet: 'This is a snippet.',
                    }),
            })
        );

        await handleSubmit(event);

        expect(event.preventDefault).toHaveBeenCalled();
        expect(fetch).toHaveBeenCalledWith('/eval', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ urlText: 'https://example.com' }),
        });

        await new Promise(resolve => setTimeout(resolve, 0));

        expect(document.getElementById('polarity').innerText).toBe('positive');
        expect(document.getElementById('subjectivity').innerText).toBe('neutral');
        expect(document.getElementById('snippet').innerText).toBe('This is a snippet.');
    });
});
