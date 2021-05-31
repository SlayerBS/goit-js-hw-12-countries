import API from './fetchCountries';
import getRefs from './get-refs';
import markup from './markup';

import errorMessage from './error';

const refs = getRefs();
const debounce = require('lodash.debounce');

refs.searchInput.addEventListener('input', debounce(onInput, 1000));

function onInput(elem) {
  elem.preventDefault();
  const searchQuery = elem.target.value;

  if (!searchQuery) {
    markup.clearMarkup();
    return;
  }

  API.fetchCountries(searchQuery)
    .then(markup.renderMarkup)
    .catch(data => {
      errorMessage(`${searchQuery} - wrong query. Please try again!`);
    });
}
