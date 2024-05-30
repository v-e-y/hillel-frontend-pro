'use strict';

const GendersEnum = require('../../src/Enums/GendersEnum');

/**
 * Human class
 * @param {String} name 
 * @param {String} gender 
 */
const Human = function(name, gender) {
    if (! Object.values(GendersEnum).includes(gender)) {
        throw new Error('Undefined gender');
    }

    /** @type {String} name */
    this.name = name;

    /** @type {String} gender */
    this.gender = gender;
}

module.exports = Human;
