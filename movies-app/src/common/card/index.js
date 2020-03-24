import React from 'react'
import {Card, Button} from 'react-bootstrap'

const MovieCard = ({title, description, poster, rate})=>{

    return(
        <Card style={{marginBottom:'3.5em'}}>
            <Card.Img variant="top" src={poster}/>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <p>Rate: {rate}</p>
            <Card.Text style={{height:'120px', overflow:'hidden'}}>
                {description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
      </Card>
      
    )

}

export default MovieCard