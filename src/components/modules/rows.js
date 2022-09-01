// import axios from 'axios'
import React, {  useState , useEffect} from 'react'
import  axios  from "../../axios"
import './row.css';
const base_url = "http://image.tmdb.org/t/p/original/";
//state is a short term memory when we refresh it dissapears
function Rows({title , fetchUrl , largerRow}) {  // title and images in container 
  const [movies , setMovies] = useState([])

  useEffect(()=>{ 
   async function fetchData (){
    const promise = await axios.get(fetchUrl);
    console.log(promise);
    setMovies(promise.data.results)
    return promise.data.results;
   }
   fetchData();
  },[fetchUrl] );
  // console.table(movies)
    return (
    <div className='row'>
        <h2>{title}</h2>
         <div className="poster">
          {movies.map( (x )=> (
            <img 
            key={x.id}
            className={`row_poster ${largerRow && "large_row"}`}
            src = {`${base_url}${largerRow ? x.poster_path : x.backdrop_path}`} 
            alt = {x.name}/>
          ))}
         </div>
        
      

    </div>
  )
}

export default Rows