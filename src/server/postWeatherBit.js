async function postWeatherBit(apiKey, lng, lat, diffDays) {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${apiKey}&units=M&days=${diffDays}`;
    try {
        const response = await fetch(url);
        const resObjs = await response.json();
        const resObj = resObjs.data.splice(-1)[0];
        return {
            high: resObj.max_temp,
            low: resObj.low_temp,
            description: resObj.weather.description
        };
    } catch (error) {
        console.log('error', error);
    }
}

module.exports = postWeatherBit;