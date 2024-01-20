import {isURL} from "./checkForURL";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let urlText = document.getElementById('url').value;
    console.log(isURL(urlText));
    if (!isURL(urlText)) {
        alert('An error occurred during HTML parsing. The input is not valid HTML.');
    } else {
        fetch('/eval', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({urlText}),
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('polarity').innerText = res.polarity;
                document.getElementById('subjectivity').innerText = res.subjectivity;
                document.getElementById('snippet').innerText = res.snippet;
            })
            .catch(error => console.log('error', error));
    }
}

export {handleSubmit}
