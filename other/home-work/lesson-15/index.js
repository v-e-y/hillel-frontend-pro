'use strict';

const GendersEnum = require('./src/Enums/GendersEnum');
const Human = require('./src/Models/Human');
const Flat = require('./src/Models/Flat');
const House = require('./src/Models/House');

const BobrCurva = new Human('BobrCurva', GendersEnum.male);
const Helen = new Human('Helen', GendersEnum.female);
const Bob = new Human('Bob', GendersEnum.male);

const cheapFlat = new Flat();

try {
    cheapFlat.addResident(BobrCurva).addResident(Bob);
} catch (error) {
    console.log(error.message);
}

const expensiveFlat = new Flat();

try {
    expensiveFlat.addResident(Helen);
} catch (error) {
    console.log(error.message);
}

// const House = new House(1);
const tinyTower = (new House(2))
    .addFlat(cheapFlat)
    .addFlat(expensiveFlat);


console.log(
    tinyTower.getFlats().map(
        flat => flat.getResidents().map(resident => `${resident.name}`).join(', ')
    ).join('; ')
);

console.info(
    'TinyTower residents: ' +
    tinyTower.getFlats().map(
        flat => flat.getResidents().reduce(
            (acc, resident) => acc + resident.name + ', ',
            flat.__proto__.constructor.name + ': '
        ).slice(0, -2)
    ).join('; ')
);