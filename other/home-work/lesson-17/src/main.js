'use strict';

/** @type {Object<Object<string>>} apis */
const apis = {
    weather: {
        url: 'http://api.openweathermap.org/data/2.5/weather',
        props: {
            q: 'LVIV',
            units: 'metric',
            APPID: '5d066958a60d315387d9492393935c19',
        },
    },
    cities: {
        url: 'http://localhost:3001/cities'
    }
};

/** @type {HTMLElement} app */
const app = document.getElementById('weather');

if (!app) {
    throw new Error('Element with id "weather" not found');
}

/** @type {HTMLElement} loader */
const loader = document.getElementById('loader');


fetch(apis.cities.url)
    .then(response => response.json())
    .then(data => {
        app.appendChild(
            getSelector(data.map(city => city.name))
        );
    })
    .catch(error => console.error('Error:', error));


/**
 * Get selector with options
 * @param {Iterable<string>} variants
 * @returns {HTMLSelectElement}
 */
const getSelector = (variants) => {
    const selector = document.createElement('select');
    selector.id = 'citySelector';
    selector.name = 'citySelector';
    const defOption = document.createElement('option');
    defOption.value = '';
    defOption.text = 'Select city';
    selector.appendChild(defOption);
    variants.forEach((variant) => {
        const option = document.createElement('option');
        option.value = variant;
        option.text = variant;
        selector.appendChild(option);
    });

    selector.addEventListener('change', citySelected);

    return selector;
};

/**
 * Get weather by city
 * @param {Event} event
 * @returns {void}
 */
const citySelected = (event) => {
    loader.style.display = 'block';

    if (app.firstChild) {
        while (app.lastChild && app.lastChild !== document.getElementById('citySelector')) {
            app.removeChild(app.lastChild);
        }
    }

    const city = event.target.value;

    const title = document.createElement('h1');
    title.innerText = `Weather in ${city}`;
    app.appendChild(title);

    const url = new URL(apis.weather.url);
    url.search = new URLSearchParams({
        ...apis.weather.props,
        q: city,
    });

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.weather[0]?.icon) {
                const img = document.createElement('img');
                img.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
                title.appendChild(img);
            }
            
            return data;
        })
        .then(data => {
            app.appendChild(
                getWeatherTable(data)
            );
        })
        .then(() => {loader.style.display = 'none';})
        .catch(error => console.error('Error:', error));
}

/**
 * Get weather table
 * @param {Object<string>} data
 * @returns {HTMLTableElement}
 */
const getWeatherTable = (data) => {
    const table = document.createElement('table');
    table.classList.add('weather-table');

    const tr1 = document.createElement('tr');
    const tr2 = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.innerText = 'Temperature:';
    tr1.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerText = `${data.main.temp}°C`;
    tr2.appendChild(td2);

    table.appendChild(tr1);
    table.appendChild(tr2);

    return table;
}
    

