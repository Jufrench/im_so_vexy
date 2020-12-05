
let allCountries = [];

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
            // if (countryObj.name === 'Bolivia (Plurinational State of)') {
            //    countryObj.name = 'Bolivia';
            // }
         })
         
         allCountries = countriesCopy;
         // console.log(allCountries);
         
         return countriesCopy;
      })
      .catch(err => console.error(err));
}

// setTimeout(() => {
//    console.log(allCountries);
// }, 4000);

// export const getCountry = countryToGet => {
//    return fetch(`https://restcountries.eu/rest/v2/name/${countryToGet}`)
//       .then(response => response.json())
//       .then(data => {
//          console.log(data);
//       })
//       .catch(err => console.error(err));
// }

// DETAILS #3
// export const getCountry = countryAlpha3Code => {
//    console.log('%ccountry to get: ', 'color: tomato', countryAlpha3Code);
   
//    let the_country = allCountries.map(countryItem => {
//       let temp;
//       if (countryItem.alpha3Code === countryAlpha3Code) {
//          temp = countryItem;
//       }
//       return temp
//    });
//    return the_country;
// }

// DETAILS #4
export const getCountry = countryAlpha3Code => {
   // console.log('%ccountry to get: ', 'color: tomato', countryAlpha3Code);

   let temp;
   allCountries.forEach(countryItem => {
      if (countryItem.alpha3Code === countryAlpha3Code) {
         temp = countryItem;
      }
   });

   return temp;
}

export const getBorderCountriesCodes = bordersArray => {
   // const tempObj = {};
   // const tempArr = allCountries.map(countryItem => {
   //    bordersArray.forEach(border => {
   //       if (border === countryItem.name) {
   //          tempObj.alpha3Code = countryItem.alpha3Code;
   //          // tempObj.name = countryItem.name;
   //       }
   //    });
   // });
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