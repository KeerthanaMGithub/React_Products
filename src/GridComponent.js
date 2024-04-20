import React,{useContext} from "react";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import DataEntryContext from "./DataEntryContext";

const GridComponent = () => {
    const {prod,handleDelete,handleUpdate} = useContext(DataEntryContext);
    return (
    <React.Fragment>     
     <Table striped className="table table-bordered">
      <thead>
       <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Edit</th>
        <th>Delete</th>
       </tr>
      </thead>
      <tbody>
      { prod &&(
        prod.map((item, index) => (
        <tr key={index + 1}>                        
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td><Button variant="primary" onClick={(e)=>handleUpdate(index)}>Edit</Button></td>
          <td><Button variant="danger" onClick={(e)=>handleDelete(index)}>Delete</Button></td>
        </tr>
      )))
      }
      </tbody>
     </Table>
    </React.Fragment>
  )
}

export default GridComponent