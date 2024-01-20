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
        const resObj = await response.json();
        let snippet = '';
        let i = 0;
        for (const sentenceObj of resObj.sentence_list) {
            if (i === 10) {
                break
            }
            snippet += (sentenceObj.text + " ");
        }
        return {polarity: resObj.score_tag, subjectivity: resObj.subjectivity, snippet: snippet};
    } catch (error) {
        console.log('error', error);
    }
}

module.exports = postMeaningCloud;