import { listTripData } from './globalVars.js';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    // let urlText = document.getElementById('url').value;
    // if (!isURL(urlText)) {
    //     alert('An error occurred during HTML parsing. The input is not valid HTML.');
    // } else {
    //     fetch('/eval', {
    //         method: 'POST',
    //         credentials: 'same-origin',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({urlText}),
    //     })
    //         .then(res => res.json())
    //         .then(function (res) {
    //             document.getElementById('polarity').innerText = res.polarity;
    //             document.getElementById('subjectivity').innerText = res.subjectivity;
    //             document.getElementById('snippet').innerText = res.snippet;
    //         })
    //         .catch(error => console.log('error', error));
    // }

    // get data from dom
    let destination = document.getElementById('destination').value;
    let startDate = document.getElementById('start').value;
    const tripData = {destination, startDate};

    // store the data
    listTripData.push(tripData);

    // edit dom
    const fragment = document.createDocumentFragment();
    const destinationElement = document.createElement('p');
    destinationElement.innerText = destination;
    fragment.appendChild(destinationElement);
    const startDateElement = document.createElement('p');
    startDateElement.innerText = startDate;
    fragment.appendChild(startDateElement);

    const card = document.createElement('div');
    card.appendChild(fragment);
    const cardList = document.getElementById('card-list');
    cardList.appendChild(card);

}

export {handleSubmit}
