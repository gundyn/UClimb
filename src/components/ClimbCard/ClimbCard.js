import React, { Fragment } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import climbimage from './climb-joke.jpeg'
import Example from './components/CheckBox/CheckBox'

const ClimbCard = () => {
  return (
    <Fragment>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ climbimage } />
        <Card.Body>
          <Card.Title>Climb Name</Card.Title>
          <Example />
          <Card.Text>
            Description of the climb
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Star Rating</ListGroupItem>
          <ListGroupItem>Location</ListGroupItem>
          <ListGroupItem>Conditions</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Check-In</Card.Link>
          <Card.Link href="#">Directions</Card.Link>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default ClimbCard
