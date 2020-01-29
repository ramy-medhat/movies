import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {Navbar,Nav} from 'react-bootstrap'

 const MainNavLink = styled(NavLink)`
    color: #17a2b8;
    text-transform: capitalize;
    margin: 0 10px;
    
    &:hover{
        color:#fff;
        text-decoration:none;
    }

    &.selected {
        color: #fff;
    }
`

const Header = () =>{
return(
    <>
        <Navbar bg="dark" variant="dark" sticky="top">
            <MainNavLink to="/" exact href="#home" style={{color:'#fff'}}>Movies</MainNavLink>
                <Nav className="mr-auto">
                     <MainNavLink activeClassName="selected" to="/" exact>Popular</MainNavLink>
                     <MainNavLink activeClassName="selected" to="/top-rated">Top Rated</MainNavLink>
                     <MainNavLink activeClassName="selected" to="/upcoming">Upcoming</MainNavLink>
                     <MainNavLink activeClassName="selected" to="/now-playing">Now Playing</MainNavLink>
                </Nav>
                {/* <Form inline onSubmit={handleSubmit}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleSearch} value={searchValue}/>
                    <Button variant="outline-info">Search</Button>
                </Form> */}
        </Navbar>
    </>
)

}

export default Header