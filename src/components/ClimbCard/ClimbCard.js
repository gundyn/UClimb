import React, { useState, Fragment } from 'react'
import { Card, ListGroup, ListGroupItem, Modal, Button } from 'react-bootstrap'
import climbimage from './climb-joke.jpeg'
// import Example from './components/CheckBox/CheckBox'

function LogClimbModal () {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>
      Log Climb
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={ climbimage } />
          <Card.Body>
            <Card.Title>Climb Name</Card.Title>
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
      </Modal>
    </Fragment>
  )
}

export default (LogClimbModal)
