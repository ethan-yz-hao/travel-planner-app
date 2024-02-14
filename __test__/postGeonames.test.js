const postGeonames = require('../src/server/postGeonames');

// Mock fetch function
global.fetch = jest.fn();

describe('postGeonames function', () => {
    test('it should return geonames data when successful', async () => {
        // Mock API key and location
        const apiKey = 'ApiKey';
        const location = 'New York';

        // Mock response object
        const mockResponse = {
            geonames: [
                {
                    lng: '-74.00597',
                    lat: '40.71278',
                    toponymName: 'New York',
                    countryName: 'United States'
                }
            ]
        };

        // Mock fetch response
        fetch.mockResolvedValue({
            json: () => Promise.resolve(mockResponse)
        });

        // Call the postGeonames function
        const result = await postGeonames(apiKey, location);

        // Assertions
        expect(fetch).toHaveBeenCalledWith(`http://api.geonames.org/searchJSON?q=${location}&maxRows=10&fuzzy=0.5&username=${apiKey}`);
        expect(result).toEqual({
            lng: '-74.00597',
            lat: '40.71278',
            toponymName: 'New York',
            countryName: 'United States'
        });
    });
});
