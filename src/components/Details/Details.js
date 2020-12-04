import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import CountryItem from '../CountryItem/CountryItem';
// import BorderCountry from '../BorderCountry/BorderCountry';
// import CountryPage from '../CountryPage/CountryPage';

// const Details = props => {
   // DETAILS 1 ===========
//    const history = useHistory();
   
//    let country;
   
//    // if (props.location.state.source === 'border_country') {
//       country = props.location.state;
//    //    console.log('%cfrom detail page', 'color: tomato');
//    // } else {
//    //    country = props.location.state;
//    //    console.log('%cfrom main page', 'color: goldenrod')
//    // }

//    return (
//       <React.Fragment>
//          <button onClick={() => history.goBack()}>Back</button>
//          <h1>{country.name}</h1>
//          {/* <CountryPage country={country} all_countries={props.all_countries} /> */}
//          <CountryPage country={country} />
//       </React.Fragment>
//    )
// }

// const Details = props => {
//    // DETAILS 2 ===========
//    const history = useHistory();

//    // console.log(props);
//    // console.log(props.location);
   
//    // let country = props.location.state;
//    // console.log('DETAILS');
//    // console.log(props.activeCountry.borders);



//    // return (
//    //    // <React.Fragment>
//    //    //    <button onClick={() => history.goBack()}>Back</button>
//    //    //    <h1>{country.name}</h1>
         
//    //    //    <CountryPage country={country} />
//    //    // </React.Fragment>

//    //    <React.Fragment>
//    //       <button onClick={() => history.goBack()}>Back</button>
//    //       {/* <h1>{props.activeCountry.name}</h1> */}
//    //       {/* <ul>
//    //          {props.activeCountry.borders.map((borderCountry, i) => {
//    //             // return <li key={i}><Link to="">{borderCountry}</Link></li>
//    //             return <BorderCountry key={i}><Link to="/details">{borderCountry}</Link></BorderCountry>
//    //          })}
//    //       </ul> */}
//    //       <CountryPage 
//    //          activeCountry={props.activeCountry}
//    //          setActiveCountry={props.setActiveCountry}
//    //          allCountries={props.allCountries} />

//    //    </React.Fragment>
//    // )
//    history.location.state = props.activeCountry;
//    console.log(history.location);

//    // return (

//    //    <React.Fragment>
//    //       <button onClick={() => history.goBack()}>Back</button>
//    //       <h1>{props.activeCountry.name}</h1>
//    //       <ul>
//    //          {props.activeCountry.borders.map((borderItem, i) => (
//    //              <BorderCountry 
//    //                  key={i} 
//    //                  borderCountryName={borderItem}
//    //                  setActiveCountry={props.setActiveCountry}
//    //                  allCountries={props.allCountries} />
//    //          ))}
//    //          </ul>
//    //    </React.Fragment>
//    // )

//    const handleSetActiveCountry = event => {
//       // console.log(event.target.text);
//       let text = event.target.text;
//       let newCountry;
//       props.allCountries.forEach(countryItem => {
//          if (text === countryItem.name) {
//             newCountry = countryItem;
//          }
//       });
//       props.setActiveCountry(newCountry);
//    }

//    const handleSetActiveCountry = event => {
//       // console.log(event.target.text);
//       let text = event.target.text;
//       let newCountry;
//       props.allCountries.forEach(countryItem => {
//          if (text === countryItem.name) {
//             newCountry = countryItem;
//          }
//       });
//       props.setActiveCountry(newCountry);
//    }

//    const manageCountryState = () => {
//       handleSetActiveCountry();
//    }

//    return (
//       <React.Fragment>
//          <button onClick={() => history.goBack()}>Back</button>

//          <h1>{props.activeCountry.name}</h1>
//          <ul>
//             {props.activeCountry.borders.map((borderItem, i) => (
//                //  <BorderCountry 
//                //      key={i} 
//                //      borderCountryName={borderItem}
//                //      setActiveCountry={props.setActiveCountry}
//                //      allCountries={props.allCountries} />

//                <li key={i}>
//                   <Link to={{
//                      pathname: `details/${borderItem}`
//                   }}
//                   onClick={manageCountryState}>
//                      {borderItem}
//                   </Link>
//                </li>
//             ))}
//             </ul>
//       </React.Fragment>
//    )
// }

const CountryPage = props => {
   // DETAILS 3 =======
   // const history = useHistory();
   const location = useLocation();
   // history.location.state = props.activeCountry;
   // console.log(history.location);
   // constructor(props) {
   //    super(props);


   // }

   // const handleSetActiveCountry = event => {
   //    let text = event.target.text;
   //    let newCountry;
   //    props.allCountries.forEach(countryItem => {
   //       if (text === countryItem.name) {
   //          newCountry = countryItem;
   //       }
   //    });
   //    props.setActiveCountry(newCountry);
   // }

   // const handleSetActiveCountry = event => {
   //    let text = event.target.text;
   //    let newCountry;
   //    props.allCountries.forEach(countryItem => {
   //       if (text === countryItem.name) {
   //          newCountry = countryItem;
   //       }
   //    });
   //    props.setActiveCountry(newCountry);
   // }

   // const manageCountryState = () => {
   //    handleSetActiveCountry();
   // }
   // console.log('COUNTRY PAGE');
   // console.log(props);

   // const handleSetPreviousCountry = () => {
   //    // props.allCountries.forEach(countryObj => {
   //    //    if (props.activeCountry.name === countryObj.name) {
   //    //       props.setPreviousCountry(countryObj);
   //    //    }
   //    // });

   //    props.setPreviousCountry(props.activeCountry);
   // }

   const handleSetActiveCountry = event => {
      const text = event.target.text;

      props.allCountries.forEach(countryObj => {
         if (text === countryObj.name) {
            props.setActiveCountry(countryObj);
         }
      });
   }

   // const managePreviousActiveCountry = event => {
   //    // handleSetPreviousCountry();
   //    // handleSetActiveCountry(event);
   // }

   const addToVisitedCountries = countryToAdd => {
      props.addToVisitedCountries(countryToAdd);
   }

   const removeFromVisitedCountries = () => {
      props.removeFromVisitedCountries();
   }

   const handleBorderCountryClick = event => {
      handleSetActiveCountry(event);
      addToVisitedCountries(location.pathname);
   }

   const handleBackButtonClick = () => {
      // if (props.previousCountry === props.activeCountry) {
      //    console.log('NEED TO FIX THIS');
      // }
      // console.log('history before', this.props.location);
      // props.manageGoingBack(location);
      // history.goBack();
      // console.log('history after', this.props.location);

      // history.push('/');
      // console.log(location);
      props.updateAfterGoingBack();
      removeFromVisitedCountries();
   }

   const handleButtonToHomeClick = () => {
      removeFromVisitedCountries();
      props.handleShowAllCountries()
   }

   if (props.visitedCountries.length === 1) {
      return (

         <React.Fragment>
            {/* <Link to="/" onClick={handleBackButtonClick}>Back</Link> */}
            <Link to="/" onClick={handleButtonToHomeClick}>Back</Link>
            <h1>{props.activeCountry.name}</h1>
            <hr />
            <ul>
               {props.activeCountry.borders.map((borderItem, i) => (   
                  <li key={i}>
                     <Link 
                        to={{ pathname: `/${borderItem}` }}
                        onClick={handleBorderCountryClick}>
                        {borderItem}
                     </Link>
                  </li>
               ))}
            </ul>
         </React.Fragment>

         )
   } else {
      return (

         <React.Fragment>
            {/* <button onClick={() => history.goBack()}>Back</button> */}
            {/* <button onClick={handleBackButtonClick}>Back</button> */}
            <Link 
               to={{ pathname: `/${props.visitedCountries[props.visitedCountries.length-1]}` }}
               // to={{ 
               //    pathname: props.visitedCountries.length === 1 ?
               //       "/" : `/${props.visitedCountries[props.visitedCountries.length-1]}`
               // }}
               onClick={handleBackButtonClick}>
                  Back
               </Link>
            <h1>{props.activeCountry.name}</h1>
            <hr />
            <ul>
               {props.activeCountry.borders.map((borderItem, i) => (   
                  <li key={i}>
                     <Link 
                        to={{ pathname: `/${borderItem}` }}
                        onClick={handleBorderCountryClick}>
                        {borderItem}
                     </Link>
                  </li>
               ))}
            </ul>
         </React.Fragment>

      )
   }
}

export default CountryPage;
