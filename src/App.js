
import './App.css';
import Rows from './components/modules/rows';
import requests from './requests';
import {Banner} from './components/modules/banner';
import {Nav} from './components/modules/nav';

//ca5e36a6066ee17db0b5cd16bd8a981a
//https://api.themoviedb.org/3/movie/550?api_key=ca5e36a6066ee17db0b5cd16bd8a981a
function app() {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Rows title ="NETFLIX ORIGINALS" 
      fetchUrl = {requests.fetchNetflixOriginals}
      largerRow />
      <Rows title ="TRENDING NOW" fetchUrl = {requests.fetchTrending}/>
      <Rows title ="TOP RATED" fetchUrl = {requests.fetchTopRated}/>
      <Rows title ="ACTION MOVIES" fetchUrl = {requests.fetchActionMovies}/>
      <Rows title ="COMEDY MOVIES" fetchUrl = {requests.fetchComedyMovies}/>
      <Rows title ="HORROR MOVIES" fetchUrl = {requests.fetchHorrorMovies}/>
      <Rows title ="ROMANCE MOVIES" fetchUrl = {requests.fetchRomanceMovies}/>
      <Rows title ="DOCUMENTARIES MOVIES" fetchUrl = {requests.fetchDocumantaries}/>
    </div>
  );
}

export default app;
