import React from 'react';
import { useHistory } from 'react-router-dom';

const Details = props => {
   const history = useHistory();
   
   console.log(props.location.state);
   return (
      <React.Fragment>
         <button onClick={() => history.goBack()}>Back</button>
         <h1>test</h1>
      </React.Fragment>
   )
}

export default Details;
