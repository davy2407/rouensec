import React from "react";
import { Button, Modal, Form } from 'react-bootstrap';
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
          Rouen Propreté/Sécurité
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Signaler un problème</h4>
        <p>
          Que souhaitez vous signaler ?
          
        </p>
        <Button className="Boutton">Propreté</Button>
        <Form>
        <h5>Evaluer le degré du signalement</h5>
  {[ 'radio'].map(type => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="3" type={type} id={`inline-${type}-3`} />
      <Form.Check inline label="4" type={type} id={`inline-${type}-4`} />
      <Form.Check inline label="5" type={type} id={`inline-${type}-5`} />
    </div>
  ))}
</Form>
        
        <br />
        <Button className="Boutton">Insécurité</Button>
        <Form>
          <h5>Evaluer le degré du signalement</h5>
  {[ 'radio'].map(type => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="3" type={type} id={`inline-${type}-3`} />
      <Form.Check inline label="4" type={type} id={`inline-${type}-4`} />
      <Form.Check inline label="5" type={type} id={`inline-${type}-5`} />
    </div>
  ))}
</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default MyVerticallyCenteredModal;