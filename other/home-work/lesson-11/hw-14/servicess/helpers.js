'use strict';

/**
 * Get first asc to choose option
 * @param {string} text
 * @param {string} value
 * @return {HTMLOptionElement}
 */
function firstAscToChooseOption(text = 'Choose', value = '') {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    return option;
}
