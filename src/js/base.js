import debounce from 'lodash.debounce';
import onlyNameCountry from '../templates/only-name-country.hbs';
import deployedCountry from '../templates/deployedCountry.hbs';
import api from './fetchCountries';
import { error } from '@pnotify/core';



const refs = {
    listCountry: document.querySelector('.list'),
    fieldSearchCountry: document.querySelector('.input-js'),
    deployList: document.querySelector('.view-resalt'),
};

refs.fieldSearchCountry.addEventListener('input', debounce(onSearchCountry, 500));

function onSearchCountry(evt) {
    evt.preventDefault;
    const fieldInput = evt.target.value;

    return api.fetchNameCountry(fieldInput)
        .then(toSelectionData)
        .catch(console.log);
};

function toSelectionData(data) { 
    if (data.length > 10) {return error({text: 'Найдено слишком много результатов поиска! Пожалуйста, введите больше значений для поиска',});}
    if (data.length > 1) { return renderListCountry(data);}
    if (data.length === 1) {return renderDeployedCountry(data);}
    if (data.status === 404) {return error({text: 'Неверный запрос',});}
};

function renderListCountry(nameCountry) {
    const markupList = onlyNameCountry(nameCountry);
    refs.deployList.innerHTML = markupList;
};

function renderDeployedCountry(nameCountry) {
    const markupList = deployedCountry(nameCountry);
    refs.deployList.innerHTML = markupList;
}