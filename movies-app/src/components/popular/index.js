import React,{useState,useEffect} from'react';
import { Button } from 'react-bootstrap';

const Popular = () =>{
    const [hasError, setErrors] = useState(false);
    const [popularMovies, setPopularMovies] = useState();
    
    async function fetchData() {
        const res = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=e944d64e45bd1927514acc391b971f4d");
        res
          .json()
          .then(res => setPopularMovies(res))
          .catch(err => setErrors(err));
      }
    
      useEffect(() => {
        fetchData();
      },[]); //like componentDidMount fetchData will call once when we mount the component



      console.log('movies', popularMovies)
      // const {results}= popularMovies
      // console.log('results',results)


      if(!popularMovies){
        return<p>loading...</p>
      }

      
    return(
      
        <>
          <Button variant="primary">Primary</Button>
      <div>

      {/* {popularMovie&&popularMovies.results.map(movie=><p>{movie.title}</p>)} */}
        {popularMovies.results.map(movie=><p>{movie.title}</p>)}
      </div>
      <hr />
        <span>Has error: {JSON.stringify(hasError)}</span>
        </>
    )
}

export default Popular