async function postGeonames(apiKey, location) {
    const url = `http://api.geonames.org/searchJSON?q=${location}&maxRows=10&fuzzy=0.5&username=${apiKey}`;
    try {
        const response = await fetch(url);
        const resObjs = await response.json();
        const resObj = resObjs.geonames[0];
        return {lng: resObj.lng, lat: resObj.lat, toponymName: resObj.toponymName, countryName: resObj.countryName};
    } catch (error) {
        console.log('error', error);
    }
}

module.exports = postGeonames;