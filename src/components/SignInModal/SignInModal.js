import React, { useState, Fragment } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function SignInModal () {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>
        Sign-In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign-In</Modal.Title>
        </Modal.Header>
        <Modal.Body>Password<br /><input type="text"></input></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign-In
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default (SignInModal)
