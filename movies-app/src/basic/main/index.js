import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
import Upcoming from '../../components/upcoming'
import TopRated from '../../components/topRated'
import Popular from '../../components/popular'
import NowPlaying from '../../components/nowPlaying'

const Main = () =>{
    return(
        <>
        <Switch>
          <Route path="/now-playing">
           <NowPlaying/>
          </Route>
          <Route path="/top-rated">
            <TopRated/>
          </Route>
          <Route path="/upcoming">
            <Upcoming/>
          </Route>
          <Route path="/" exact>
            <Popular/>
          </Route>
        </Switch>
        </>
    )
}

export default Main