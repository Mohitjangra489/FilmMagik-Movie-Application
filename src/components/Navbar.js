import React, { useState } from 'react'
import image from '../images/lines.png'
import movielogo from '../images/final.jpg'
import { Link,Outlet} from 'react-router-dom';

function Navbar() {

    const[isexpanded,setisexpanded]=useState(false);
    return (
        <>
            <nav className='containernav'>
                <a href='/' className='title'>
                    <img src={movielogo} className='movielogo'></img>
                </a>  
                <button onClick={()=>{setisexpanded(!isexpanded)}} className='hamburger'>
                    <img src={image} className='img'></img>
                </button>
                <div className={isexpanded ? "navigation-menu.expanded":"navigation-menu"} >
                    <ul>
                        <li><Link to={`/trending`}>Most Popular</Link></li>
                        <li><Link to={`/toprated`}>Top-Rated</Link></li>
                        <li><Link to={`/upcoming`}>New Releases</Link></li>
                        <li><Link to={`/searchmovies`}>SearchMovie</Link></li>
                        {/* <li><Link to={`/trending`}>Most Popular</Link></li>
                        <li><Link to={`/toprated`}>Top-Rated</Link></li>
                        <li><Link to={`/upcoming`}>New Releases</Link></li>
                        <li><Link to={`/searchmovies`}>SearchMovie</Link></li> */}
                        
                        {/* <li>Horror</li>
                        <li>Thriller</li>
                        <li>series</li> */}
                    </ul>
                </div>
                </nav>
                {/* <Outlet/> */}
                </>
        
    )
}

export default Navbar
