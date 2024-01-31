import {TripDataMap} from './globalVars.js';
import {createCard} from "./createCard.js";

async function handleSubmit(event) {
    event.preventDefault()

    // create tripData for later storage
    const tripData = {};

    // get data from dom
    let destination = document.getElementById('destination').value;
    tripData.destination = destination;
    const startDateTime = new Date(document.getElementById('start').value);
    tripData.startDateTime = startDateTime.toISOString();

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

    // store the data
    const cardID = TripDataMap.size.toString();
    TripDataMap.set(cardID, tripData);
    // local storage
    localStorage.setItem('TripDataMap', JSON.stringify(Array.from(TripDataMap.entries())));

    // edit dom
    await createCard(cardID, tripData);
}

export {handleSubmit}
