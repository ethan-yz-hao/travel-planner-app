function initializeHTML() {
    const startDateTimeElement = document.getElementById('start')
    const nowUTC = new Date();
    const timeZoneOffset = nowUTC.getTimezoneOffset() * 60000;
    const localISOTime = (new Date(nowUTC - timeZoneOffset)).toISOString().slice(0,16);
    startDateTimeElement.value = localISOTime;
    startDateTimeElement.setAttribute('min', localISOTime);

    const addButton = document.getElementById('add-trip-button');
    const formContainer = document.getElementById('trip-form-container');

    addButton.addEventListener('click', function() {
        formContainer.classList.toggle('dropdown-form-active');
    });

    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', () => {
    //         navigator.serviceWorker.register('/service-worker.js');
    //     });
    // }
}

export {initializeHTML}