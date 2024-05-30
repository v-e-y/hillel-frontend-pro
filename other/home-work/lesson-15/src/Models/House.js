'use strict';

const Flat = require('./Flat');

/**
 * House class
 */
const House = function(maxFlatsCount) {
    /** @type {Array<Flat>} flats */
    const _flats = [];

    /** @type {Number} maxFlatsCount 100 By default */
    let _maxFlatsCount = 100;

    if (maxFlatsCount) {
        _maxFlatsCount = maxFlatsCount;
    }

    /**
     * Add flat to the house
     * @param {Flat} flat
     * @returns {this}
     */
    this.addFlat = (flat) => {
        if (! flat instanceof Flat) {
            throw new Error('Invalid flat');
        }

        if (_flats.length >= _maxFlatsCount) {
            throw new Error('House is full');
        }

        _flats.push(flat);

        return this;
    }

    /**
     * Get flats
     * @returns {Array<Flat>}
     */
    this.getFlats = () => {
        return _flats;
    }
}

module.exports = House;