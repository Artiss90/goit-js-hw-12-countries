import onlyNameCountry from '../templates/only-name-country.hbs';
import api from './api-country';

const refs = {
    listCountry: document.querySelector('.list'),
    fieldSearchCountry: document.querySelector('.input-js'),
};

let nameCountry = 'usa';

api.fetchNameCountry(nameCountry).then(renderListCountry).catch(console.log);

function renderListCountry(nameCountry) {
    const markupList = onlyNameCountry(nameCountry);
    refs.listCountry.innerHTML = markupList;
}