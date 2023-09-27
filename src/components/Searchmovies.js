import React, { useEffect, useState } from 'react'
import backimage from '../images/backimage.jpg'
import { Navigate, useNavigate } from 'react-router-dom';


function Searchmovies() {
    const[moviename,setmoviename]=useState("");
    const[searchedmovie,setsearchedmovie]=useState([]);
    const navigate=useNavigate();



    async function api(){
      const headers = {
          'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGZiNTM1NzQ5OWJmNmJmY2M5MGU1OTkxZDA5ZGU2MyIsInN1YiI6IjY0ZWM4Mzg2MWZlYWMxMDBlMTZiOWNmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yM02HiqaApbT2xP9qGiyNdx1j6hTkTBmUqqyQNW9llM',
          'accept': 'application/json'
          
      };
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${moviename}&api_key=5dfb5357499bf6bfcc90e5991d09de63`,headers);
      const movies = await response.json();
      
      console.log(movies);
      setsearchedmovie(movies.results);
      
   };
   
  function handlemovieclick(movieid) {
    console.log("handle", movieid);
    movieclick(movieid);
  }

  async function movieclick(id) {
    const headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGZiNTM1NzQ5OWJmNmJmY2M5MGU1OTkxZDA5ZGU2MyIsInN1YiI6IjY0ZWM4Mzg2MWZlYWMxMDBlMTZiOWNmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yM02HiqaApbT2xP9qGiyNdx1j6hTkTBmUqqyQNW9llM',
      'accept': 'application/json'

    };
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5dfb5357499bf6bfcc90e5991d09de63&append_to_response=videos,credits,images`, headers);
    const movies = await response.json();

    console.log(movies.title)
    navigate("/moviedetails",{state:movies});

    // setallmovies(movies.results)
  };


    function handlesearchmovie(){
  console.log(moviename);
    api();

    }
    useEffect(()=>{
     console.log("rendered")
    },[searchedmovie])
    useEffect(()=>{
     console.log("moviename")
    },[moviename])

  return (
    <>
    <div className='wdiv'>
    <div className='searchdiv' style={{backgroundImage:`url(${backimage})`}}>
      <h1 className='welcome'>Welcome.</h1>
     <span className='spantag'> Millions of movies,TV shows and people to discover. Explore now.</span><br></br>
      <input type='text'  className="searchinput" onChange={(e)=>{setmoviename(e.target.value)}} placeholder='Search for a movie,TV show,person....'></input><button onClick={handlesearchmovie} className='searchbutton'>search</button>
    </div>
    <div className='maindiv'>
       {
        searchedmovie.map((element)=>{
          let a="https://image.tmdb.org/t/p/original";
          console.log(element.title)
       return(
          <>
          <div >
          <div key={element.id} className='moviediv'>
          <img src={a+element.poster_path}  className='Movieimage' onClick={(e) => { handlemovieclick(e.target.id) }} id={element.id}></img>
          </div>
          <div className='movietitle'>
          <button className='rating-button'>{Math.round(element.vote_average*Math.pow(10,1))/Math.pow(10,1)}</button>
          <h1 style={{fontSize:'20px'}}>{element.title}</h1>
          </div>
          </div>
          </>
       )
      })
       }
    </div>
    </div>
    </>
  )
}

export default Searchmovies;
