import { TripDataMap, setTripDataMap } from './globalVars.js';
import {createCard} from "./createCard.js";

async function initializeHTML() {
    const startDateTimeElement = document.getElementById('start')
    const nowUTC = new Date();
    const timeZoneOffset = nowUTC.getTimezoneOffset() * 60000;
    const localISOTime = (new Date(nowUTC - timeZoneOffset)).toISOString().slice(0,16);
    startDateTimeElement.value = localISOTime;
    startDateTimeElement.setAttribute('min', localISOTime);

    const addTripButton = document.getElementById('add-trip-button');
    const formContainer = document.getElementById('trip-form-container');

    addTripButton.addEventListener('click', function() {
        if (formContainer.classList.contains('dropdown-form')) {
            formContainer.classList.remove('dropdown-form');
            formContainer.classList.add('dropdown-form-inactive');
        }
        formContainer.classList.toggle('dropdown-form-active');
    });

    // init cards with local storage
    if (localStorage.getItem('TripDataMap')) {
        setTripDataMap(new Map(JSON.parse(localStorage.getItem('TripDataMap'))));
    } else {
        setTripDataMap(new Map());
    }
    for (let [cardID, tripData] of TripDataMap) {
        await createCard(cardID, tripData);
    }

    // remove button event
    document.getElementById('card-list').addEventListener('click', function(event) {
        if(event.target.tagName === 'BUTTON') {
            const buttonID = event.target.getAttribute('button-id');
            const cardElement = document.querySelector(`.card[card-id="${buttonID}"]`);
            if (cardElement) {
                cardElement.remove();
            }
            if (TripDataMap.has(buttonID)) {
                TripDataMap.delete(buttonID);
                localStorage.setItem('TripDataMap', JSON.stringify(Array.from(TripDataMap.entries())));
            }

        }
    });
}

export {initializeHTML}