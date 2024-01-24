function initializeHTML() {
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const localDate = `${year}-${month}-${day}`;
        return localDate;
    };
    const startDateElement = document.getElementById('start')
    const startDate = formatDate(new Date());
    startDateElement.value = startDate;
    startDateElement.setAttribute('min', startDate);

    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', () => {
    //         navigator.serviceWorker.register('/service-worker.js');
    //     });
    // }
}

export {initializeHTML}