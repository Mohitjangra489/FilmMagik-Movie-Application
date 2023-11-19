import './App.css';
import ReactDOM from "react-dom/client";
import {Outlet} from "react-router-dom";
import { useEffect ,useState} from 'react';
import Navbar from './components/Navbar';
import Carouselcomponent from './components/Carouselcomponent';
import Trendingmovies from './components/Trendingmovies.js';
import Searchmovies from './components/Searchmovies';
import Toprated from './components/Toprated'
import Upcoming from './components/Upcoming'
import Footer from './components/Footer';
import Moviedetails from './components/Moviedetails';


function App() {

  useEffect(()=>{
    window.scrollTo(0, 0);
});

return (
  <>
  <Navbar/>
  <Outlet/>
  <Footer />
  
</>
);
}

export default App;