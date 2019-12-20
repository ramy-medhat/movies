import React,{useState,useEffect} from'react';
import MovieCard from '../../common/card';
import Loading from '../../common/spinner'
import { Container, Row, Col } from 'react-bootstrap';

const NowPlaying = () =>{
    const [nowPlayingMovie, setnowPlayingMovie] = useState();
    
    async function fetchData() {
        const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?&Lnguage=en-US&api_key=e944d64e45bd1927514acc391b971f4d");
        res
          .json()
          .then(res => setnowPlayingMovie(res))
      }
 
      useEffect(() => {
        fetchData();
      },[]); //like componentDidMount fetchData will call once when we mount the component

      if(!nowPlayingMovie){
        return<Loading/>
      }
      
    return(
        <Container style={{padding: '100px 0'}}>
          <Row>
           <Col xs={12}>
             <h1 style={{marginBottom: '50px'}}> Now Playing Movies</h1>
           </Col>
            {/* {nowPlayingMovie&&nowPlayingMovie.results.map(movie=><p>{movie.title}</p>)} */}
              {nowPlayingMovie.results.map((movie,index)=>{
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

export default NowPlaying