import React from 'react'
// import Nav from './Nav'
import {useNavigate} from 'react-router-dom'
import './home.css'
function Homepage() {
    const navigate=useNavigate()
    const stdReg=()=>{
        navigate('/Student/Register')
    }
    const stdlog=()=>{
        navigate('/Student/login')
    }
    const cashier=()=>{
      navigate('/cashier/login')
    }
  return (
    <div>
        {/* <Nav /> */}
        <div className="para">
      
      <h1>Fine-Management System</h1>
                 <h3>For-Students</h3>
         <button className="std"  onClick={stdReg} ><span></span>Register</button>
         <button className="std"  onClick={stdlog} ><span></span>Login</button>
            <h3>For-Cashier</h3>
         <button className="cashier" onClick={cashier} ><span></span>Login</button>
         {/* <button  ><span></span>Balance_check</button> */}
    </div>
    </div>
  )
}

export default Homepage