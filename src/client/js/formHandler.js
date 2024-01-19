function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let urlText = document.getElementById('url').value;
    console.log(urlText);
    // checkForURL(urlText)

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
            console.log(res)
            document.getElementById('polarity').innerText = res.score_tag;
            document.getElementById('subjectivity').innerText = res.subjectivity;
            document.getElementById('snippet').innerText = res.sentence_list[0].text;
        })
        .catch(error => console.log('error', error));
}

export {handleSubmit}
