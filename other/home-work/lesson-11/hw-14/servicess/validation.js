'use strict';

/**
 * @type {Object<string, array<string|function>} orderValidationRules
 */
const orderValidationRules = {
    "buyer.firstName": ["required", "min:3", "max:50", function(v) {return new RegExp(/^[A-Z]/).test(v)}],
    "buyer.lastName": ["required", "min:3", "max:50", function(v) {return new RegExp(/^[A-Z]/).test(v)}],
    "buyer.middleName": ["min:2", "max:50", function(v) {return new RegExp(/^[A-Z]/).test(v)}],
    "buyer.phone": ["required", "min:10", "max:13", function(v) {return new RegExp(/^[\+\d]+[\(\)|\d-]{11,16}$/).test(v)}],
    "buyer.email": ["required", "email", function(v) {return new RegExp(/^[\w-]+@([\w-]+\.)+[\w-]{2,}$/).test(v)}],
    "comment": ["max:500"],
    "delivery.city": ["required", "min:2", "max:50", "in:" + cities.map(city => city.name).join(',')],
    "delivery.postOffice": ["required", "min:1", "max:50", "in:" + storeHouses.map(postOffice => postOffice.id).join(',')],
    "payment.type": ["required", "in:" + paymentTypes.map(paymentType => paymentType.name).join(',')],
    "products": ["array", "min:1"],
};

/**
 * Validate order
 * @param {Object<string>} order
 * @return {Object<boolean|Object<string>>}
 */
function validateOrder(order) {
    const validationResult = {
        status: false,
        errors: {},
    };

    for (const field in orderValidationRules) {
        const rules = orderValidationRules[field];
        const value = field.split('.').reduce((o, i) => o[i], order);

        for (const rule of rules) {
            if (typeof rule === 'function') {                
                if (! rule(value)) {
                    validationResult.errors[field] = 'Invalid value';
                }
                continue;
            }
            
            const [ruleName, ruleValue] = rule.split(':');

            switch (ruleName) {
                case 'required':
                    if (!value) {
                        validationResult.errors[field] = 'Field is required';
                    }
                    break;
                case 'min':
                    if (value.length < ruleValue) {
                        validationResult.errors[field] = `Field length must be more than ${ruleValue}`;
                    }
                    break;
                case 'max':
                    if (value.length > ruleValue) {
                        validationResult.errors[field] = `Field length must be less than ${ruleValue}`;
                    }
                    break;
                case 'in':
                    if (!ruleValue.split(',').includes(value)) {
                        validationResult.errors[field] = `Field value must be one of ${ruleValue}`;
                    }
                    break;
                case 'array':
                    if (!Array.isArray(value)) {
                        validationResult.errors[field] = 'Field must be an array';
                    }
                    break;
                default:
                    validationResult.errors[field] = 'Unknown validation rule';
            }
        }
    }

    if (Object.keys(validationResult.errors).length) {
        return validationResult;
    }

    validationResult.status = true;
    return validationResult;
}