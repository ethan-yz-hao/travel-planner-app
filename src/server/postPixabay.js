async function postPixabay(apiKey, destination) {
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${destination}&image_type=photo&per_page=3`;
    try {
        const response = await fetch(url);
        const resObjs = await response.json();
        if (resObjs.totalHits > 0) {
            return {imgURL: resObjs.hits[0].webformatURL}
        } else {
            return {imgURL: null}
        }
    } catch (error) {
        console.log('error', error);
    }
}

module.exports = postPixabay;