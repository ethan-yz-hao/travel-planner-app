async function postPixabay(apiKey, destination, countryName) {
    const urlDestination = `https://pixabay.com/api/?key=${apiKey}&q=${destination}&image_type=photo&per_page=3`;
    try {
        const responseDestination = await fetch(urlDestination);
        const resDestinationObjs = await responseDestination.json();
        if (resDestinationObjs.totalHits > 0) {
            return {imgURL: resDestinationObjs.hits[0].webformatURL}
        } else {
            const urlCountry = `https://pixabay.com/api/?key=${apiKey}&q=${countryName}&image_type=photo&per_page=3`;
            const responseCountry = await fetch(urlCountry);
            const resCountryObjs = await responseCountry.json();
            if (resCountryObjs.totalHits > 0) {
                return {imgURL: resCountryObjs.hits[0].webformatURL}
            } else {
                return {imgURL: null}
            }
        }
    } catch (error) {
        console.log('error', error);
    }
}

module.exports = postPixabay;