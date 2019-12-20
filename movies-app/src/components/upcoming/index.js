import React,{useState,useEffect} from'react';
import MovieCard from '../../common/card';
import Loading from '../../common/spinner'
import { Container, Row, Col } from 'react-bootstrap';

const Upcoming = () =>{
    const [upcomingMovies, setupcomingMovies] = useState();
    
    async function fetchData() {
        const res = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=e944d64e45bd1927514acc391b971f4d");
        res
          .json()
          .then(res => setupcomingMovies(res))
      }
    
      useEffect(() => {
        fetchData();
      },[]); //like componentDidMount fetchData will call once when we mount the component

      if(!upcomingMovies){
        return<Loading/>
      }
      
    return(
        <Container style={{padding: '100px 0'}}>
          <Row>
           <Col xs={12}>
             <h1 style={{marginBottom: '50px'}}>Upcoming Movies</h1>
           </Col>
            {/* {upcomingMovie&&upcomingMovies.results.map(movie=><p>{movie.title}</p>)} */}
              {upcomingMovies.results.map((movie,index)=>{
                return(
                  <Col xs={12} sm={6} md={3} lg={4} key={index}>
                     <MovieCard title={movie.title} description={movie.overview} rate={movie.vote_average} poster={movie.poster_path}/>
                   </Col>
                )
              })}
          </Row>
        </Container>
    )
}

export default Upcoming