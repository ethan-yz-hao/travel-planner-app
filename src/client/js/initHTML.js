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
        if (formContainer.classList.contains('dropdown-form')) {
            formContainer.classList.remove('dropdown-form');
            formContainer.classList.add('dropdown-form-inactive');
        }
        formContainer.classList.toggle('dropdown-form-active');
    });

    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', () => {
    //         navigator.serviceWorker.register('/service-worker.js');
    //     });
    // }
}

export {initializeHTML}