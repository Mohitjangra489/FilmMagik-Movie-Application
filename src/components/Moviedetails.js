import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import playbutton from '../images/play-button.png'

function Moviedetails() {
    const location = useLocation();
    const movie = location.state;
    let a = "https://image.tmdb.org/t/p/original";
    let b="https://i.ytimg.com/vi/ZfVYgWYaHmE/hqdefault.jpg"

    let castarray = movie.credits.cast;

    useEffect(()=>{
        window.scrollTo(0, 0);
    })

    return (
        <>
            <div>
                <div className='moviecnt'>
                    <div >
                        <div className='moviedetailsdiv' style={{ backgroundImage: `url(${a + movie.poster_path})` }}></div>
                        <div className='posterctn'>
                            <div key={movie.id} className='movieposter' >
                                <img src={a + movie.poster_path} className='mvimg' ></img>
                                <button className='ratebtn'>{Math.round(movie.vote_average * Math.pow(10, 1)) / Math.pow(10, 1)}</button>
                            </div>
                            <div className='titlediv'>
                                <h1 style={{ fontSize: '58px', fontWeight: '600' }}>{`${movie.title}(${parseInt(movie.release_date)})`}</h1>
                                <div className='genrediv'>
                                    {
                                        movie.genres.map((genre) => {
                                            return (

                                                <span key={genre?.id}>{genre.name}..</span>

                                            )
                                        })
                                    }
                                </div>
                                <h2>{movie.release_date + "  " + "/ " + (movie.runtime / 60).toFixed(2) + "  hr"}</h2><br></br>
                                <span style={{ fontStyle: "italic", color: "#eb400a" }}>{movie.tagline}</span>
                                <h2>Overview</h2>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='castdiv'>
                    <h1 style={{ color: "black" }}>Top Billed Cast</h1>
                    <div className='bothctn'>
                        <div className='castctn'>
                            {
                                castarray.map((cast) => {
                                    return (
                                        <div key={cast.id} className='carddiv'>
                                            <img src={a + cast.profile_path} className='castimg'></img>
                                            <br></br>
                                            <p className='castorgname'>{cast.original_name}</p>
                                            <p className='castactname'>{cast.character}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='otherdetails'>
                            <label className='lbl'>Status</label>
                            <span className='spn'>{movie.status}</span><br></br>
                            <label className='lbl'>Original Language</label>
                            <span className='spn'>{movie.original_language}</span><br></br>
                            <label className='lbl'>Budget</label>
                            <span className='spn'>{"$" + movie.budget}</span><br></br>
                            <label className='lbl'>Revenue</label>
                            <span className='spn'>{"$" + movie.revenue}</span><br></br>
                        </div>
                    </div>

                </div>
                <div className='mediadiv'>
                    <h1>Media</h1>
                    <div className='allvideosdiv'>
                   {
                    movie.videos.results.map((video)=>{
                        return(
                           <div  key={video.id} style={{backgroundImage:`url("https://i.ytimg.com/vi/${video.key}/hqdefault.jpg")`}} className='trailerimg'>
                            <a href={`https://www.youtube.com/watch?v=${video.key}`}><img src={playbutton} className='playbtnimg' ></img></a>
                            </div>
                        )
                    })
                   }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Moviedetails
