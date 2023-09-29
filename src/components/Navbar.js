import React, { useState } from 'react'
import image from '../images/lines.png'
import close from '../images/close.png'
import movielogo from '../images/final.jpg'
import { Link,Outlet} from 'react-router-dom';

function Navbar() {

    const[isexpanded,setisexpanded]=useState(false);
    return (
        <>
        <div className='navbar-container'>
            <nav className='containernav'>
                <Link to='/' className='title'>
                    <img src={movielogo} className='movielogo'></img>
                </Link>  
                <button onClick={()=>{setisexpanded(!isexpanded)}} className='hamburger'>
                    <img src={isexpanded ?close:image} className='img'></img>
                </button>
                <div className={isexpanded ? "navigation-menu expanded":"navigation-menu"} >
                    <ul>
                        <li><Link to={`/trending`} onClick={()=>{setisexpanded(!isexpanded)}}>Most Popular</Link></li>
                        <li><Link to={`/toprated`} onClick={()=>{setisexpanded(!isexpanded)}}>Top-Rated</Link></li>
                        <li><Link to={`/upcoming`} onClick={()=>{setisexpanded(!isexpanded)}}>New Releases</Link></li>
                        <li><Link to={`/searchmovies`} onClick={()=>{setisexpanded(!isexpanded)}}>SearchMovie</Link></li>
                        {/* <li><Link to={`/trending`}>Most Popular</Link></li>
                        <li><Link to={`/toprated`}>Top-Rated</Link></li>
                        <li><Link to={`/upcoming`}>New Releases</Link></li>
                        <li><Link to={`/searchmovies`}>SearchMovie</Link></li> */}
                        
                    </ul>
                </div>
                </nav>
                </div>
                </>
        
    )
}

export default Navbar
