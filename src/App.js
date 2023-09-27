import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Navbar from './components/Navbar'
import Carouselcomponent from './components/Carouselcomponent';
import Trendingmovies from './components/Trendingmovies.js';
import Searchmovies from './components/Searchmovies';
import Toprated from './components/Toprated'
import Upcoming from './components/Upcoming'
import Footer from './components/Footer';
import Moviedetails from './components/Moviedetails';

function App() {

console.log("initial commit successfully");
return (
  <>
  {/* <BrowserRouter> */}
  <Routes>
    <Route path='/' element={
      <>
    <Navbar/> 
    <Carouselcomponent/>
    <Trendingmovies/>
    <Toprated/>
    <Upcoming/>
    <Searchmovies/>
    <Footer/>
    </>
    }></Route>
      <Route  exact path='/trending' element={<Trendingmovies/>}/>
      <Route  exact path='/top-rated' element={<Toprated/>}></Route>
      <Route  exact path='/upcoming' element={<Upcoming/>}></Route>
      <Route  exact path='/search' element={<Searchmovies/>}></Route>
      <Route  exact path='/moviedetails' element={<Moviedetails/>}></Route>

</Routes>
{/* </BrowserRouter> */}
{/* <Navbar></Navbar>
<Carouselcomponent></Carouselcomponent>
<Trendingmovies></Trendingmovies>
<Toprated></Toprated>
<Upcoming></Upcoming>
<Searchmovies></Searchmovies>
<Footer></Footer> */}
</>
);
}

export default App;