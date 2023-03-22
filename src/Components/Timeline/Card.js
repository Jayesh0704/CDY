import React, { useState } from 'react';
  import './Card.css';
  import Button from 'react-bootstrap/Button';
  import Modal from 'react-bootstrap/Modal';



function MyVerticallyCenteredModal(props) {
  const downloadPDF = () => {
  
    const link = document.createElement('a');
    
    link.href = props.pdf;
   
    link.download = props.title;
  
    document.body.appendChild(link);
    
    link.click();
   
    document.body.removeChild(link);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="modal-image" src={props.image} alt={props.title}  />
        <p>{props.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={downloadPDF} className="Modal-button"  >Download Handbook</Button>
        <Button className="Modal-button" ><a  className="Register" href={props.link} target="none">Register </a></Button>
      </Modal.Footer>
    </Modal>
  );
}

const Card = ({ title,pdf, image,link, description }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    
    <div className="card ">
      <div className="card-shape"></div>
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
      </div>
      <img className="card-image" src={image} alt={title} />
      
      <div className="card-expander">
        <Button className="card-button" onClick={() => setModalShow(true)}>
          Show Details
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          title={title}
          pdf={pdf}
          image={image}
          description={description}
          link={link}
        />
      </div>
    </div>
   
    </>
  );
};

export default Card;
