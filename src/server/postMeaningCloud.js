async function postMeaningCloud(apiKey, url) {
    const formData = new FormData();
    formData.append("key", apiKey);
    formData.append("url", url);
    formData.append("lang", "en");

    const requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    };

    try {
        const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
        return await response.json();
    } catch (error) {
        console.log('error', error);
    }
}

module.exports = postMeaningCloud;