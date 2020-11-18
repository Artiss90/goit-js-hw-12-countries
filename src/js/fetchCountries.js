const BASE_URL = 'https://restcountries.eu/rest/v2/name';

 function fetchNameCountry(countryName) {
   return fetch(`${BASE_URL}/${countryName}`)
        .then(response => {
            return (response.json());
        })
        .catch(console.log)
}


export default { fetchNameCountry };