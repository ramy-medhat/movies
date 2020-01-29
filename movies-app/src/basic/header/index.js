import React,{useState} from 'react'
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

const [searchValue,setSearchValue] = useState('')

const handleSubmit = e =>{
    e.preventDefault();
}

const handleSearch = e =>{
    e.preventDefault()
   
    setSearchValue(e.target.value);
    console.log(searchValue)
} 


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
                <Form inline onSubmit={handleSubmit}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onKeyUp={handleSearch} />
                    <Button variant="outline-info">Search</Button>
                </Form>
        </Navbar>
    </>
)

}

export default Header