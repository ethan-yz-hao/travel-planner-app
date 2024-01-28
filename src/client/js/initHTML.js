function initializeHTML() {
    const startDateTimeElement = document.getElementById('start')
    const nowUTC = new Date();
    const timeZoneOffset = nowUTC.getTimezoneOffset() * 60000;
    const localISOTime = (new Date(nowUTC - timeZoneOffset)).toISOString().slice(0,16);
    startDateTimeElement.value = localISOTime;
    startDateTimeElement.setAttribute('min', localISOTime);
    console.log(localISOTime);

    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', () => {
    //         navigator.serviceWorker.register('/service-worker.js');
    //     });
    // }
}

export {initializeHTML}