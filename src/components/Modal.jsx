import React from "react";
import { Button, Modal } from 'react-bootstrap';
import './Modal.css'


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Signaler un problème</h4>
        <p>
          Que souhaitez vous signaler ?
          
        </p>
        <Button className="Boutton">Propreté</Button>
        <br />
        <Button className="Boutton">Insécurité</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default MyVerticallyCenteredModal;