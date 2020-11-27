export const logTest = () => {
   console.log('%cFlagsAPI', 'color: tomato');
}

export const getAllCountries = () => {
   return fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => data)
      // .then(response => {
      //    response.forEach(country => {
      //       console.log(country.name);
      //    });
      // })
      .catch(err => console.error(err));
}
