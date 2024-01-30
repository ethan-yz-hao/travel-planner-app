import {TripDataMap} from './globalVars.js';

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

    // get country
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

    // get image
    const resImg = await fetch('/img', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({destination,  countryName: geoData.countryName}),
    });
    const imgData = await resImg.json();
    tripData.imgURL = imgData.imgURL;

    // get weather
    let weatherText = '';
    if (diffDays > 16) {
        weatherText = '<p class="weather">Weather of the day: No accurate weather data available<\p>';
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
        weatherText = `<p class="weather">Weather of the day: ${weatherData.description}<\p><p class="temperature">Temperature - High: ${weatherData.high}<span>&#8451;</span> Low: ${weatherData.low}<span>&#8451;</span></p>`;
    }

    // store the data
    const cardID = TripDataMap.size.toString();
    TripDataMap.set(cardID, tripData);

    // edit dom
    // init dom element
    const cardFragment = document.createDocumentFragment();
    // img
    const imgElement = document.createElement('img');
    if (tripData.imgURL !== null) {
        imgElement.setAttribute('src', tripData.imgURL);
        imgElement.setAttribute('alt', tripData.destination);
    }
    cardFragment.appendChild(imgElement);
    // text
    const textFragment = document.createDocumentFragment();
    // destination
    const geoElement = document.createElement('p');
    geoElement.classList.add('destination');
    geoElement.innerText = `Trip to ${tripData.destination}, ${tripData.geoData.countryName}`;
    textFragment.appendChild(geoElement);
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
    startDateElement.classList.add('departure');
    startDateElement.innerText = `Departing: ${tripData.startDateTime.toLocaleString('en-US', options)}`;
    textFragment.appendChild(startDateElement);
    // count down
    const diffDaysElement = document.createElement('p');
    diffDaysElement.classList.add('countdown');
    diffDaysElement.innerText = `${tripData.destination}, ${tripData.geoData.countryName} is ${diffDays.toString()} day(s) away`;
    textFragment.appendChild(diffDaysElement);
    const weatherElement = document.createElement('p');
    weatherElement.innerHTML = weatherText;
    textFragment.appendChild(weatherElement);

    // integrate
    const textContent = document.createElement('div');
    textContent.classList.add('text-content');
    textContent.appendChild(textFragment);
    cardFragment.appendChild(textContent);
    // card
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = cardID;
    card.appendChild(cardFragment);
    // card list
    const cardList = document.getElementById('card-list');
    cardList.appendChild(card);

    // local storage
    localStorage.setItem('TripDataMap', JSON.stringify(Array.from(TripDataMap.entries())));
}

export {handleSubmit}
