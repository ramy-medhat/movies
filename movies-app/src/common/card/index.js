import React from 'react'
import {Card, Button} from 'react-bootstrap'

const MovieCard = ({title, description, poster, rate})=>{

    return(
        <Card>
            <Card.Img variant="top" src={poster} style={{ width: '18rem' }}/>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <p>Rate:{rate}</p>
            <Card.Text>
                {description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
      </Card>
      
    )

}

export default MovieCard