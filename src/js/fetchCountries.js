export default { fetchCountries };

const BASE_URL = 'https://restcountries.eu/rest';

function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/v2/name/${searchQuery}`).then(response => {
    if (response.status === 404) return;

    return response.json();
  });
}
