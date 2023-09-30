import React from 'react';
import { useRouteError } from 'react-router-dom';

function Errorpage() {
    const error=useRouteError();
    console.log(error)
  return (
    <div className='errorpage'>
      <p className='oops'>Oops!</p>

      <p className='sorry'>Sorry,an unexpected error has occured.</p>
      <i className='sorry-1'>{ error.data }</i>
      <p>
        <i className='sorry-1'>{ error.status + " - "+error.statusText }</i>
      </p>
    </div>
  )
}

export default Errorpage;
