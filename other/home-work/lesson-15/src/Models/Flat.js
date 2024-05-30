'use strict';

const Human = require('./Human');

/**
 * Flat class
 */
const Flat = function() {
    /** @type {Array<Human>} _residents Residents of the flat */
    const _residents = [];

    /**
     * Add resident to the flat
     * @param {Human} resident 
     * @returns {this}
     */
    this.addResident = (resident) => {
        if (! resident instanceof Human) {
            throw new Error('Invalid resident');
        }

        _residents.push(resident);

        return this;
    }

    /**
     * Get residents
     * @returns {Array<Human>}
     */
    this.getResidents = () => {
        return _residents;
    }
}

module.exports = Flat;