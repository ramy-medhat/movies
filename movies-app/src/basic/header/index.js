import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'

 const MainNavLink = styled(Link)`
    color: #17a2b8;
    text-transform: capitalize;
    margin: 0 10px;
    &:hover{
        color:#fff;
        text-decoration:none;
    }
`

const Header = () =>{

return(
    <>
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                     <MainNavLink to="/">Popular</MainNavLink>
                     <MainNavLink to="/top-rated">Top Rated</MainNavLink>
                     <MainNavLink to="/upcoming">Upcoming</MainNavLink>
                     <MainNavLink to="/now-playing">Now Playing</MainNavLink>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
        </Navbar>
    </>
)

}

export default Header