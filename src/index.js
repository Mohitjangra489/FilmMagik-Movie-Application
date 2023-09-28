import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import Navbar from './components/Navbar';
import Carouselcomponent from './components/Carouselcomponent';
import Trendingmovies from './components/Trendingmovies.js';
import Searchmovies from './components/Searchmovies';
import Toprated from './components/Toprated';
import Upcoming from './components/Upcoming'
import Footer from './components/Footer';
import Moviedetails from './components/Moviedetails';
import Errorpage from './components/Errorpage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Errorpage/>,
    children: [
      {
        path: "/",
        element: <><Carouselcomponent/><Trendingmovies /> <Toprated /> <Upcoming/> <Searchmovies/></>,
      },
      {
        path:'/trending',
        element:<Trendingmovies/>
      },
      {
        path: "/toprated",
        element: <Toprated />,
      },
      {
        path: "/Searchmovies",
        element: <Searchmovies />,
      },
      {
        path: "/Upcoming",
        element: <Upcoming />,
      },
      {
        path: "/Moviedetails",
        element: <Moviedetails />,
      },
    ],
  },
 
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
