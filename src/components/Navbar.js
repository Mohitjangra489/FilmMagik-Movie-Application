import React, { useState } from 'react'
import image from '../images/lines.png'
import movielogo from '../images/movielogo.png'
import { Link,Outlet} from 'react-router-dom';

function Navbar() {

    const[isexpanded,setisexpanded]=useState(false);
    return (
        <>
            <nav className='containernav'>
                <a href='/' className='title'>MyMovies
                    {/* <img src={movielogo} className='movielogo'></img> */}
                </a>  
                <button onClick={()=>{setisexpanded(!isexpanded)}} className='hamburger'>
                    <img src={image} className='img'></img>
                </button>
                <div className={isexpanded ? "navigation-menu.expanded":"navigation-menu"} >
                    <ul>
                        <li><a href='http://localhost:3000/trending'>Most Popular</a></li>
                        <li><a href='http://localhost:3000/top-rated'>Top-Rated</a></li>
                        <li><a href='http://localhost:3000/upcoming'>New Release</a></li>
                        
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
