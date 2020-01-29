import React,{useState,useEffect} from'react';
import MovieCard from '../../common/card';
import Loading from '../../common/spinner'
import { Container, Row, Col } from 'react-bootstrap';

const TopRated = () =>{
    const [topRated, setTopRated] = useState();
    
    async function fetchData() {
        const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=e944d64e45bd1927514acc391b971f4d");
        res
          .json()
          .then(res => setTopRated(res))
      }
    
      useEffect(() => {
        fetchData();
      },[]); //like componentDidMount fetchData will call once when we mount the component

      if(!topRated){
        return<Loading/>
      }
      
    return(
        <Container style={{padding: '100px 0'}}>
          <Row>
           <Col xs={12}>
             <h1 style={{marginBottom: '50px'}}>Top Rated Movies</h1>
           </Col>
            {/* {topRated&&topRated.results.map(movie=><p>{movie.title}</p>)} */}
              {topRated.results.map((movie,index)=>{
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

export default TopRated