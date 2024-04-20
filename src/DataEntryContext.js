import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const DataEntryContext = createContext({});

export const DataProvider=({children})=>{

    const [id,setId]=useState("");
    const [deletename,setDeletename]=useState("");
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [ename,seteName]=useState("");
    const [edescription,seteDescription]=useState("");
    const [action,setAction]=useState("");        
    const [modelsize,setModelSize]=useState("lg");
    const [price,setPrice]=useState(0);
    const [eprice,setePrice]=useState(0);
    const [deleteRowId,setDeleteRowId]=useState(0);
    const [updateRowId,setUpdateRowId]=useState(0);
    const [prod,setProd]=useState([]);       
    const [updateRowIdshow,setupdateRowIdshow]=useState(false);
    const [showM, set_Show_M] =  useState(false); 
    
    const [alert, setAlert] = React.useState({
        type: 'error',
        text: 'This is a alert message',
        show: false
      })    

    useEffect(()=>{
        const fetchProduct= async ()=>
        {
            try
            {
                const res = axios.get("http://localhost:5194/api/Product/Products");
                const result = (await res).data;
                console.log(result);
                setProd(result);
    
            }catch(ex)
            {
                console.log(ex);
            }
        }
        fetchProduct();
    },[])

    function onCloseAlert() {
        setAlert({
          type: '',
          text: '',
          show: false
        })
      }

    const handleAdd= async(e)=>{
        if(name.trim() =="")
        {
            setAlert({
                type: "error",
                text: 'Name is Required!...',
                show: true
              })         
              return;            
        }
        if(description.trim() =="")
        {
            setAlert({
                type: "error",
                text: 'Description is Required!...',
                show: true
              })         
              return;            
        }
        if(price =="" || price == 0)
        {
            setAlert({
                type: "error",
                text: 'Price is Required!...',
                show: true
              })         
              return;
        }
        const amount = price;    
        if (isNaN(amount) == true) {    
            setAlert({
                type: "error",
                text: 'Price is not valid!...',
                show: true
              })         
            return;    
        }

        var jsonstr =JSON.stringify(prod);
        var datal = prod.length;
        var url="http://localhost:5194/api/Product/Products?pId="+ 
         datal + 
        "&pName="+name +
        "&pDescription="+description +
        "&pPrice="+ price +
        "&jsonstr=" + jsonstr;       
        const res = axios.post(url);
        const result = (await res).data;
        console.log(result);
        setProd(result);
        setName("");
        setDescription("");
        setPrice("");
        setId("");

    }    
    const modalShow = () => { 
        set_Show_M(true);}; 
    const closeModal = () => { 
        set_Show_M(false);};             
    const handleUpdate = (e) => { 
        setUpdateRowId(e);
        var data=prod[e];    
        seteName(data.name);
        seteDescription(data.description);
        setePrice(data.price);
        setId(data.id);
        setAction("");
        setAction("Edit Row"); 
        setupdateRowIdshow(true)
        setModelSize("lg");
        modalShow();
    }; 
    const handleDelete = (e) => { 
        setDeleteRowId(e);  
        var data=prod[e];    
        setAction(""); 
        setAction("Delete Row"); 
        setId(data.id);
        setDeletename(data.name)
        setupdateRowIdshow(false);
        setModelSize("sm");
        modalShow();
    };
    const handleEdit= async(e)=>{
        const RowId = updateRowId;
        const name=ename;
        const descript=edescription;
        const price=eprice;
        if(name.trim() =="")
        {
            setAlert({
                type: "error",
                text: 'Name is Required!...',
                show: true
              })         
              return;            
        }
        if(descript.trim() =="")
        {
            setAlert({
                type: "error",
                text: 'Description is Required!...',
                show: true
              })         
              return;            
        }
        if(price =="" || price == 0)
        {
            setAlert({
                type: "error",
                text: 'Price is Required!...',
                show: true
              })         
              return;
        }
        const amount = price;    
        if (isNaN(amount) == true) {
    
            setAlert({
                type: "error",
                text: 'Price is not valid!...',
                show: true
              })         
            return;    
        }            
        var data =prod;
        var jsonstr =JSON.stringify(data);
        var url="http://localhost:5194/api/Product/Products?pId="+ 
        RowId + 
       "&pName="+name +
       "&pDescription="+descript +
       "&pPrice="+ price +
       "&jsonstr=" + jsonstr;       
        const res =await axios.put(url);
        const result = (await res).data;
        console.log(result);
        setProd(result);
        closeModal();
    }
    const handleDeleteok=async(e)=>{
    const RowId = deleteRowId;
    var data =prod;
    var jsonstr =JSON.stringify(data);
    var url="http://localhost:5194/api/Product/Products?pId="+ 
    RowId + 
   "&jsonstr=" + jsonstr;   
    const res =await axios.delete(url);
    const result = (await res).data;
    console.log(result);
    setProd(result);
    closeModal();

   }
    return(
        <DataEntryContext.Provider value={{prod,handleDelete,handleUpdate,handleAdd,name,setName,description
        ,setDescription,price,setPrice,setAlert,closeModal,onCloseAlert,showM,
        action,alert,ename,edescription,eprice,
        seteName,seteDescription,setePrice,handleEdit
        ,updateRowIdshow,handleDeleteok,deletename,modelsize
        }}>
        {children}
        <br></br>
        </DataEntryContext.Provider>
    );
};
export default DataEntryContext;