import {listTripData} from './globalVars.js';

async function handleSubmit(event) {
    event.preventDefault()

    // create tripData for later storage
    const tripData = {};

    // get data from dom
    let destination = document.getElementById('destination').value;
    tripData.destination = destination;
    const startDateTime = new Date(document.getElementById('start').value);
    tripData.startDateTime = startDateTime

    // calculate count down
    const nowUTC = new Date();
    const diffTime = Math.abs(startDateTime.getTime() - nowUTC.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // init dom element
    const fragment = document.createDocumentFragment();

    // destination
    // get geo
    const resGeo = await fetch('/geo', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({destination}),
    });
    const geoData = await resGeo.json();
    tripData.geoData = geoData;
    const geoElement = document.createElement('p');
    geoElement.innerText = `Trip to ${destination}, ${geoData.countryName}`;
    fragment.appendChild(geoElement);

    // start Date Time
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    const startDateElement = document.createElement('p');
    startDateElement.innerText = `Departing: ${startDateTime.toLocaleString('en-US', options)}`;
    fragment.appendChild(startDateElement);

    // count down
    const diffDaysElement = document.createElement('p');
    diffDaysElement.innerText = `${destination}, ${geoData.countryName} is ${diffDays.toString()} day(s) away`;
    fragment.appendChild(diffDaysElement);

    // get weather
    const weatherElement = document.createElement('p');
    if (diffDays > 16) {
        weatherElement.innerHTML = '<p>Weather of the day: No accurate weather data available}<\p>';
        fragment.appendChild(weatherElement);
    } else {
        const resWeather = await fetch('/weather', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({lng: geoData.lng, lat: geoData.lat, diffDays}),
        });
        const weatherData = await resWeather.json();
        tripData.weatherData = weatherData;
        weatherElement.innerHTML = `<p>Weather of the day: ${weatherData.description}<\p><p>Temperature - High: ${weatherData.high}<span>&#8451;</span> Low: ${weatherData.low}<span>&#8451;</span></p>`;
        fragment.appendChild(weatherElement);
    }

    // store the data
    listTripData.push(tripData);

    // edit dom
    const card = document.createElement('div');
    card.appendChild(fragment);
    const cardList = document.getElementById('card-list');
    cardList.appendChild(card);

}

export {handleSubmit}
