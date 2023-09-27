import React from 'react'
import { useState,useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


function Toprated() {
    const[allmovies,setallmovies]=useState([]);
    const[page,setpage]=useState(1);
    const navigate=useNavigate();

    function handleprev(){
        if(page>1)
        {
            setpage(page-1);
        }
    }
    function handlenext(){
        if(page<15)
        {
            setpage(page+1);
        }
    }

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
    async function api(){
        const headers = {
            'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGZiNTM1NzQ5OWJmNmJmY2M5MGU1OTkxZDA5ZGU2MyIsInN1YiI6IjY0ZWM4Mzg2MWZlYWMxMDBlMTZiOWNmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yM02HiqaApbT2xP9qGiyNdx1j6hTkTBmUqqyQNW9llM',
            'accept': 'application/json'
            
        };
        // https://api.themoviedb.org/3/trending/movie/day?language=en-US
        // const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/transformers/Mohitjangra/5dfb5357499bf6bfcc90e5991d09de63",{method:"GET",headers,mode:'cors'});
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=5dfb5357499bf6bfcc90e5991d09de63&page=${page}&language=en-US`,headers);
        const movies = await response.json();
        
        console.log(movies)
        setallmovies(movies.results)
     };
   
    useEffect(()=>{
        api();   
    },[page])
  return (
    <div className='contn'>
    <h1 style={{color:"white",paddingTop:"20px",marginLeft:"20px"}}>Top-Rated</h1>
  <div className='maindiv'>
    { 
      allmovies.map((element)=>{
          let a="https://image.tmdb.org/t/p/original";
          console.log(element.title)
       return(
          <>
            <div>
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
    <div className='pagingbtn'>
    <button onClick={handleprev} className='prevbtn' >Prev</button><span className='pageno'>{page}</span><button onClick={handlenext} className='nextbtn'>Next</button>
    </div>
    </div>
  )
}

export default Toprated
