import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Addfine() {
    const [regno,setRegno]= useState();
    const [amount,setAmount]= useState();
    const [reason,setReason]= useState();

    const navigate=useNavigate()
    useEffect(()=>{
      if(! localStorage.getItem('Cashier')){
        navigate('/cashier/login')
      }
        (() => {
        
          switch (reason) {
             case 'Assingment':
                 return setAmount(10)
             case 'dress-code':
                 return (
                  setAmount(5)
                 )
                 case 'late-for class':
                 return (
                  setAmount(20)
                 )
             default:
                 return (
                   setAmount()
                 )
          }
      
       })()
      })
      const Addfine=async() =>{
        axios.post("http://localhost:5000/api/fine/add",{
            RegNo:regno,
            amount:amount,
            reason:reason
}).then(response=>{
  toast.success('🦄 successfully logedin!!!', {
    className:"toast-success",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

}).catch(err=>{console.log(err.message);})
      }

const back=()=>{
  navigate('/cashier/finepage')
}


  return (
    <center>
<br /><br /><br /><br />
    <div className="log">
      <br /><br />
        <label>RegNo:</label>
        <input type="text" name="regno" placeholder="Enter Regno" onChange={e=>setRegno(e.target.value)}   /><br /><br />
        <label>Reason:</label>
        <select value={reason} onChange={(e)=>{setReason(e.target.value)}} id="format">
          <option value="Assingment">Assingment</option>
          <option value="dress-code">dress-code</option>
          <option value="late-for class">late-for class</option>
        </select><br /><br />
        <input type="number" placeholder="Enter the amount to add" className="inputBox" value={amount} onChange={(e)=>{setAmount(e.target.value)}}   />
        <br /><br />
        <button onClick={Addfine}>Add Fine</button>
        <br /><br />
        <button onClick={back}>Back</button>
        <ToastContainer />
    </div>
    </center>
  )
}

export default Addfine