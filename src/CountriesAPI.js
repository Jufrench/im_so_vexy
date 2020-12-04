

export const getAllCountries = () => {
   return fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         const countriesCopy = data;

         // THIS WORKS
         // countriesCopy.forEach(countryLeft => {
         //    countryLeft.borders.forEach((borderLeft, indexLeft, arrBordersLeft) => {
         //       countriesRight.forEach(countryRight => {
         //          if (arrBordersLeft[indexLeft] === countryRight.alpha3Code) {
         //             // console.log('YEA BABY!');
         //             // console.log(arrBordersLeft, countryRight.name);
         //             // console.log(borderLeft, countryRight.name);
         //             arrBordersLeft[indexLeft] = countryRight.name;
         //          }
         //       })
         //    })
         // })
         // END OF THIS WORKS

         data.forEach(countryObj => {
            countryObj.borders.forEach((border, index, countryObjBorders) => {
               data.forEach(dataCountry => {
                  if (countryObjBorders[index] === dataCountry.alpha3Code) {
                     countryObjBorders[index] = dataCountry.name;
                  }
               })
            })
         })
         
         
         return countriesCopy;
      })
      .catch(err => console.error(err));
}


export const getCountry = countryToGet => {
   return fetch(`https://restcountries.eu/rest/v2/name/${countryToGet}`)
      .then(response => response.json())
      .then(data => {
         console.log(data);
      })
      .catch(err => console.error(err));
}
