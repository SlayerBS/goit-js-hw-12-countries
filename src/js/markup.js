import countriesTemplate from '../templates/countriesTemplate.hbs';
import countryTemplate from '../templates/countryTemplate.hbs';
import getRefs from './get-refs';
import notify from './error';
export default { renderMarkup, clearMarkup };

const refs = getRefs();

function renderMarkup(data) {
  console.log(data);
  const { length } = data;
  if (length === 1) {
    notify.successMessage(`Yes! You found this country!`);
    countryMarkup(data);
    return;
  }

  if (length > 1 && length <= 10) {
    countryListMarkup(data);
    return;
  }

  if (length > 10) {
    clearMarkup();
    notify.errorMessage('Too many matches found. Please enter a more specific query!');
    return;
  }
}

function countryListMarkup(data) {
  const markup = countriesTemplate(data);
  refs.countryContainer.innerHTML = markup;
}

function countryMarkup(data) {
  const markup = countryTemplate(data);
  refs.countryContainer.innerHTML = markup;
}

function clearMarkup() {
  refs.countryContainer.innerHTML = '';
}
