import React,{useState} from 'react'
import {Form, FormControl} from 'react-bootstrap';


const Search = () =>{
  const [SearchValue,setSearchValue]= useState('');
  const handleSearch = e =>{
    setSearchValue(e.target.value)
  }
    return(
        <>
         <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onKeyUp={handleSearch} value={SearchValue} />
          </Form>
        </>
    )
}

export default Search