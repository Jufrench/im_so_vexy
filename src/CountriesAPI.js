
let allCountries = [];

export const getAllCountries = () => {
   return fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         const countriesCopy = data;

         // countriesCopy.forEach(countryLeft => {
         //    countryLeft.borders.forEach((borderLeft, indexLeft, arrBordersLeft) => {
         //       countriesRight.forEach(countryRight => {
         //          if (arrBordersLeft[indexLeft] === countryRight.alpha3Code) {
         //             arrBordersLeft[indexLeft] = countryRight.name;
         //          }
         //       });
         //    });
         // });

         data.forEach(countryObj => {
            countryObj.borders.forEach((border, index, countryObjBorders) => {
               data.forEach(dataCountry => {
                  if (countryObjBorders[index] === dataCountry.alpha3Code) {
                     countryObjBorders[index] = dataCountry.name;
                  }
               });
            });
         });
         
         allCountries = countriesCopy;
         
         return countriesCopy;
      })
      .catch(err => console.error(err));
}

export const getCountry = countryAlpha3Code => {
   let temp;
   allCountries.forEach(countryItem => {
      if (countryItem.alpha3Code === countryAlpha3Code) {
         temp = countryItem;
      }
   });

   return temp;
}

export const getBorderCountriesCodes = bordersArray => {
   let newArray = [];
   allCountries.forEach(countryItem => {
      bordersArray.forEach(borderItem => {
         if (borderItem === countryItem.name) {
            newArray.push(
               {
                  name: countryItem.name,
                  alpha3Code: countryItem.alpha3Code
               }
            );
         }
      });
   });

   return newArray;
}