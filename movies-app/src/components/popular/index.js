import React,{useState,useEffect} from 'react';
import MovieCard from '../../common/card';
import Loading from '../../common/spinner'
import { Container, Row, Col } from 'react-bootstrap';

const Popular = () =>{
    const [popularMovie, setPopularMovie] = useState();

    useEffect(() => {
      fetch("https://api.themoviedb.org/3/movie/popular?&Lnguage=en-US&api_key=e944d64e45bd1927514acc391b971f4d")
      .then(res=>{
        if(res.ok){
         return res.json()
        }
        else{
          throw new Error('something went wrong!')
        }
      })
      .then(res => setPopularMovie(res))
      .catch(err=>console.log(err))
    },[]); //like componentDidMount fetchData will call once when we mount the component

    

console.log('movies',popularMovie)

      if(!popularMovie){
        return<Loading/>
      }
      
    return(
        <Container style={{padding: '100px 0'}}>
          <Row>
           <Col xs={12}>
             <h1 style={{marginBottom: '50px'}}>Popular Movies</h1>
           </Col>
            {/* {popularMovie&&popularMovie.results.map(movie=><p>{movie.title}</p>)} */}
              {popularMovie.results.map((movie,index)=>{
                return(
                  <Col xs={12} sm={6} md={3} lg={4} key={index}>
                     <MovieCard title={movie.title} description={movie.overview} rate={movie.vote_average} poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                   </Col>
                )
              })}
          </Row>
        </Container>
    )
}

export default Popular