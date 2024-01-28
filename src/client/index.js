import { handleSubmit } from './js/formHandler';
import { initializeHTML } from './js/initHTML.js';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

document.addEventListener('DOMContentLoaded', () => {
    initializeHTML();
});

export {
    handleSubmit
}