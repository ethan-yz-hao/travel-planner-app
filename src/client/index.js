import { handleSubmit } from './js/formHandler';
import { initializeHTML } from './js/initHTML.js';

import './styles/_variables.scss';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/card.scss';

document.addEventListener('DOMContentLoaded', () => {
    initializeHTML();
});

export {
    handleSubmit
}