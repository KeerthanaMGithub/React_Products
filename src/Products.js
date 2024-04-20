import React,{useContext} from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FormComponent from "./FormComponent";
import GridComponent from "./GridComponent";
import DataEntryContext from "./DataEntryContext";
import Alert from 'react-popup-alert';
import "react-popup-alert/dist/index.css";

import { 
    Button, Modal
} from "react-bootstrap"; 

const Product=()=>{ 
  const {closeModal,onCloseAlert,showM,action,alert,
    ename,edescription,eprice,seteName,seteDescription,
    setePrice,handleEdit,updateRowIdshow,handleDeleteok,
    deletename,modelsize
  } = useContext(DataEntryContext);
  return(
    <Form>       
       <Card style={{ width: '83rem',left:100 }}>
        <Card.Body>
         <Card.Title>Products</Card.Title>
          <br></br>
          <FormComponent/>
          <br></br>
          <GridComponent/>
          <br></br>
       </Card.Body>
      </Card>
      <Alert
       header={'Alert Message!'}
       btnText={'Close'}
       text={alert.text}
       type={alert.type}
       show={alert.show}
       onClosePress={onCloseAlert}
       pressCloseOnOutsideClick={true}
       showBorderBottom={true}
       alertStyles={{}}
       headerStyles={{}}
       textStyles={{}}
       buttonStyles={{}}
      />
      <Modal 
       size={modelsize}
       show={showM} 
       onHide={closeModal}> 
       <Modal.Header closeButton> 
          <Modal.Title> 
            {action} 
          </Modal.Title> 
       </Modal.Header> 
       <Modal.Body> 
         {updateRowIdshow ==true ?
         ( <div className="row">
             <div className="col-3">
               <Form.Label>Name</Form.Label>
               <Form.Control type="text" placeholder="Name" value={ename} onChange={(e)=>seteName(e.target.value)} />
             </div>
             <div className="col-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" value={edescription} onChange={(e)=>seteDescription(e.target.value)} />
             </div>
             <div className="col-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Price" value={eprice} onChange={(e)=>setePrice(e.target.value)} />
             </div> 
             <div className="col-3">
              <Button variant="primary" style={{marginTop:30}} onClick={(e)=>handleEdit(e)} >Edit Product</Button>            
             </div>
            </div>
         )
         :
         (
            <div className="row">
              <div className="col-12">
                <div style={{textAlign:"center",color:"red",fontWeight:500}}>Confirm ok to delete {deletename}!...</div>
                </div>
            </div>
  
          )
          }
        </Modal.Body> 
        <Modal.Footer>                 
          {updateRowIdshow ?
          (
          <Button variant="secondary" onClick={closeModal} className="btn btn-danger"> Close </Button>
          )
          :
          (
          <Button variant="danger" style={{marginTop:30}} onClick={(e)=>handleDeleteok(e)} >OK</Button> 
          )
          }
        </Modal.Footer> 
      </Modal> 
    </Form>
);
}

export default Product;
