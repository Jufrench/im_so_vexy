export const getAllCountries = () => {
   return fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.error(err));
}
