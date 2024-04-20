import React,{useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DataEntryContext from "./DataEntryContext";

const FormComponent = () => {
    const {prod,handleAdd,name,setName,description,setDescription,price,setPrice,handleEdit} = useContext(DataEntryContext);
    return (
    <React.Fragment>
        <div className="row">
          <div className="col-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="col-3">  
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
         </div>
         <div className="col-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
         </div>
         <div className="col-3">  
            <Button variant="primary" style={{marginTop:30}} onClick={(e)=>handleAdd(e)} >Add Product</Button>
         </div>
       </div>
      </React.Fragment>
  )
}
export default FormComponent