import React from 'react'
import styled from 'styled-components'
import Spinner from 'react-bootstrap/Spinner'


const CutomSpinner = styled(Spinner)`
background-color: #17a2b8;
margin: 200px auto;
`

const Loading = () =>{
return <CutomSpinner animation="grow" />
}

export default Loading