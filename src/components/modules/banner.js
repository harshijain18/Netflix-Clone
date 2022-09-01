import React from 'react'
import axios from "../../axios"
import requests from '../../requests';
import './banner.css'
import {useState , useEffect} from 'react'; 
export function Banner() {
  const[movie , setMovie] = useState([]);
  useEffect(() =>{
    async function fetchData(){
      const promise = await axios.get(requests.fetchTopRated);
      setMovie(promise.data.results[
      Math.floor(Math.random() * promise.data.results.length -1) ])
      return promise;
    }
    fetchData();
  },[]) 
  return (
    <header className='banner' style={{
        backgroundSize: 'cover',
        backgroundImage: `url('http://image.tmdb.org/t/p/original/${movie?.backdrop_path} ')`,
        backgroundPosition: 'center center'
    }}>
        <div className='banner_contents'>
            <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className='banner_buttons'>
                <button className='banner_button'>PLAY</button>
                <button className='banner_button'>MY LIST</button>
            </div>
            <h1 className='banner_description'>{movie?.overview}</h1>
        </div>


    </header>
  )
}
