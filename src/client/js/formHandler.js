import {listTripData} from './globalVars.js';

async function handleSubmit(event) {
    event.preventDefault()

    // get data from dom
    let destination = document.getElementById('destination').value;
    const startDateTime = new Date(document.getElementById('start').value);

    // create tripData for later storage
    const tripData = {destination, startDateTime};

    // calculate count down
    const nowUTC = new Date();
    const diffTime = Math.abs(startDateTime.getTime() - nowUTC.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // edit dom
    const fragment = document.createDocumentFragment();
    // destination
    const destinationElement = document.createElement('p');
    destinationElement.innerText = destination;
    fragment.appendChild(destinationElement);
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
    startDateElement.innerText = startDateTime.toLocaleString('en-US', options);
    fragment.appendChild(startDateElement);
    // count down
    const diffDaysElement = document.createElement('p');
    diffDaysElement.innerText = diffDays.toString();
    fragment.appendChild(diffDaysElement);

    // get geo and weather
    const weatherElement = document.createElement('p');
    if (diffDays > 16) {
        weatherElement.innerText = 'No accurate weather data available';
        fragment.appendChild(weatherElement);
    } else {
        await fetch('/weather', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({destination, diffDays}),
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                tripData.weatherData = response.weatherData;
                tripData.geoData = response.geoData;
                weatherElement.innerText = `Weather: ${response.weatherData}`;
                fragment.appendChild(weatherElement);
            });
    }

    // store the data
    listTripData.push(tripData);

    const card = document.createElement('div');
    card.appendChild(fragment);
    const cardList = document.getElementById('card-list');
    cardList.appendChild(card);

}

export {handleSubmit}
