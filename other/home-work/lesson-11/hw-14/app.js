'use strict';

/** @type {Object} order */
const order = {
    id: 0,
    buyer: {
        firstName: '',
        lastName: '',
        middleName: '',
        phone: '',
        email: '',
    },
    comment: '',
    delivery: {
        city: '',
        postOffice: '',
    },
    payment: {
        type: '',
    },
    products: [],
};

/** @type {NodeList} products */
const products = document.querySelectorAll("[data-product-id]");

if (products.length) {
    products.forEach(product => {
        const productAddToCardBtn = product.querySelector('button[type="submit"]');

        productAddToCardBtn.addEventListener('click', e => {
            e.preventDefault();
            addProductToTheCard(product);
        });
    });
}

/**
 * @param {HTMLElement} product
 * @return {void}
 */
function addProductToTheCard(product) {
    product.querySelector('fieldset').disabled = true;

    const productForm = product.querySelector('form[name="product-form"');

    const productToCheckout = {
        id: product.dataset.productId,
        name: product.querySelector('h1').textContent,
        price: productForm.querySelector('[data-product-price]').getAttribute('data-product-price'),
        quantity: productForm.elements.quantity.value,
    };

    order.products.push(productToCheckout);

    renderCheckoutForm(product);
}

/**
 * Process to checkout
 * @param {HTMLElement} product
 * @return {void}
 */
function renderCheckoutForm(product) {
    const checkoutContainer = document.createElement('aside');

    const checkoutTitle = document.createElement('h2');
    checkoutTitle.textContent = 'Checkout';
    checkoutContainer.appendChild(checkoutTitle);

    /**
     * Render products
     */
    checkoutContainer.appendChild(document.createElement('ul'));
    order.products.forEach(p => {
        const productItem = document.createElement('li');
        productItem.textContent = `${p.name} x ${p.quantity} - ${p.price}`;
        checkoutContainer.querySelector('ul').appendChild(productItem);
    });

    const checkoutForm = document.createElement('form');
    checkoutForm.dataset.form = 'checkout';
    const formFieldset = document.createElement('fieldset');
    checkoutForm.appendChild(formFieldset);

    /**
     * Add buyer fields
     */
    Object.keys(order.buyer).forEach(name => {
        const input = document.createElement('input');
        input.type = resolveFieldType(name);
        input.name = name;
        input.placeholder = name;
        input.required = true;
        formFieldset.appendChild(input);
    });

    /**
     * Add city selector
     */
    const citySelector = document.createElement('select');
    citySelector.required = true;
    citySelector.name = 'city';
    citySelector.appendChild(firstAscToChooseOption('Choose city', ''));
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.name;
        option.textContent = city.name;
        citySelector.appendChild(option);
    });
    formFieldset.appendChild(citySelector);

    /**
     * Add post office selector
     */
    const postOffice = document.createElement('select');
    postOffice.required = true;
    postOffice.name = 'postOffice';
    postOffice.appendChild(firstAscToChooseOption('Choose post office', ''));
    storeHouses.forEach(storeHouse => {
        const option = document.createElement('option');
        option.value = storeHouse.id;
        option.textContent = storeHouse.name;
        postOffice.appendChild(option);
    });
    formFieldset.appendChild(postOffice);

    /**
     * Add payment types selector
     */
    const paymentType = document.createElement('select');
    paymentType.required = true;
    paymentType.name = 'paymentType';
    paymentType.appendChild(firstAscToChooseOption('Choose payment type', ''));
    paymentTypes.forEach(pt => {
        const option = document.createElement('option');
        option.value = pt.name;
        option.textContent = pt.name;
        paymentType.appendChild(option);
    });
    formFieldset.appendChild(paymentType);

    const comment = document.createElement('textarea');
    comment.name = 'comment';

    formFieldset.appendChild(comment);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Confirm order';

    formFieldset.appendChild(submitBtn);

    checkoutContainer.appendChild(checkoutForm);

    product.appendChild(checkoutContainer);

    checkoutForm.addEventListener('submit', e => {
        e.preventDefault();
        if (document.querySelector('[data-validation-errors]')) {
            document.querySelector('[data-validation-errors]').remove();
        }
        submitOrder();
    });
}

/**
 * Resolve field type
 * @param {string} possible
 * @returns {string}
 */
const resolveFieldType = possible => {
    if (possible ===  'phone') {
        return 'tel';
    }

    if (possible === 'email') {
        return 'email';
    }

    return 'text';
}
    
/**
 * Submit order
 */
function submitOrder() {
    const checkoutForm = document.querySelector('[data-form="checkout"]');

    Object.keys(order.buyer).forEach(name => {
        order.buyer[name] = checkoutForm.elements[name].value;
    });

    order.delivery.city = checkoutForm.elements.city.value;
    order.delivery.postOffice = checkoutForm.elements.postOffice.value;
    order.payment.type = checkoutForm.elements.paymentType.value;
    order.comment = checkoutForm.elements.comment.value;

    const validationResult = validateOrder(order);
    
    if (validationResult.status) {
        return renderOrder();
    }

    const ul = document.createElement('ul');
    ul.setAttribute('data-validation-errors', '');
    for (const [key, field] of Object.entries(validationResult.errors)) {
        const li = document.createElement('li');
        li.style.color = 'red';
        li.textContent = `${key}: ${field}`;
        ul.appendChild(li);
    }
    checkoutForm.appendChild(ul);

    return false;
}

/**
 * Render order
 * @return {void}
 */
function renderOrder() {
    const orderContainer = document.createElement('article');
    orderContainer.dataset.order = 'confirmedOrder';

    const orderTitle = document.createElement('h2');
    orderTitle.textContent = 'Your order confirmed!';
    orderContainer.appendChild(orderTitle);

    const orderList = document.createElement('ul');
    orderContainer.appendChild(orderList);

    for (const field in order) {
        if (field === 'products') {
            const productsList = document.createElement('ul');
            orderList.appendChild(productsList);

            order[field].forEach(product => {
                const productItem = document.createElement('li');
                productItem.textContent = `${product.name} x ${product.quantity} - ${product.price}`;
                productsList.appendChild(productItem);
            });

            continue;
        }

        if (field === 'buyer') {
            const buyerList = document.createElement('ul');
            orderList.appendChild(buyerList);

            for (const buyerField in order[field]) {
                const buyerItem = document.createElement('li');
                buyerItem.textContent = `${buyerField}: ${order[field][buyerField]}`;
                buyerList.appendChild(buyerItem);
            }

            continue;
        }

        if (field === 'delivery') {
            const deliveryList = document.createElement('ul');
            orderList.appendChild(deliveryList);

            for (const deliveryField in order[field]) {
                const deliveryItem = document.createElement('li');
                deliveryItem.textContent = `${deliveryField}: ${order[field][deliveryField]}`;
                deliveryList.appendChild(deliveryItem);
            }

            continue;
        }
    }

    document.body.appendChild(orderContainer);

    order.products = [];

    const products = document.querySelectorAll("[data-product-id]");
    products.forEach(product => {
        product.querySelector('fieldset').disabled = false;
    });
}