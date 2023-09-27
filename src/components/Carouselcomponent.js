import React from 'react'
import {useState,useCallback,useRef} from "react"; 

import {
  MDBCarousel,
  MDBCarouselItem,

} from 'mdb-react-ui-kit';



function Carouselcomponent() {


  return (
    <div className='carouseldiv'>
    <MDBCarousel showControls>
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={1}
      src='https://thebrandinquirer.files.wordpress.com/2020/02/best-movie-poster-design-myfopinion-oscars-2020-1.jpg'
      alt='...'
      interval={2000}
    />
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={2}
      src='https://wallpaperaccess.com/full/329583.jpg'
      alt='...'
      interval={2000}

    />
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={3}
      src='https://wallpaperaccess.com/full/8983883.jpg'
      alt='...'
      interval={2000}

    />
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={4}
      src='https://wallpapercave.com/dwp1x/wp10362565.jpg'
      alt='...'
      interval={2000}

    />
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={5}
      src='https://wallpapercave.com/dwp1x/wp1946046.jpg'
      alt='...'
      interval={2000}

    />
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={6}
      src='https://wallpaperaccess.com/full/6211742.jpg'
      alt='...'
      interval={2000}

    />
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={7}
      src='https://wallpaperaccess.com/full/8983832.jpg'
      alt='...'
      interval={2000}

    />
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={8}
      src='https://wallpaperaccess.com/full/2052720.jpg'
      alt='...'
      interval={2000}

    />
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={9}
      src='https://wallpaperaccess.com/full/7365259.jpg'
      alt='...'
      interval={2000}

    />
  </MDBCarousel>
  </div>
  );
}
  
     



export default Carouselcomponent;
