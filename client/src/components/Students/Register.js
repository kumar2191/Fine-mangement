import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/StdReg.css'
function Register() {

    const[name,setName] = useState();
    const[RegNO,setRegNO] = useState();
    const[department,setDepartment] = useState();
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    
    
    const navigate=useNavigate();
const Reg=async()=>{
    axios.post("http://localhost:5000/api/student/register",{
        name:name,
        RegNo:RegNO,
        Dept:department,
        // Section:section,
        email:email,
        password:password
}).then(response=>{
    console.log("success",response);
    toast.success('🦄 successfully registered', {
        className:"toast-success",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        navigate('/Student/login')
}).catch(error=>{
    console.log(error)
    toast.error("🎆 somthing Wrong")
})
};

  return (

    <div className="create">
        <main className="create">

        <center>

        <form className="form">
            <h1>Create-Student</h1>
        <label >Name</label>
        <input type="text" name="name" placeholder="enter your name" onChange={e=>setName(e.target.value)}  required  />

        <label>Email</label>
        <input type="email" name="email" placeholder="enter your email" onChange={e=>setEmail(e.target.value)} required />

        <label>Reg_No</label>
        <input type="text" name="reg_no" placeholder="enter your Regno" onChange={e=>setRegNO(e.target.value)}  required/>
        
        {/* <label>Section</label>
        <select onChange={e=>setSection(e.target.value)}  required>
           
            <option>A</option>
            <option>B</option>
            <option>C</option>
            
        </select> */}
        <label>Department</label>
        <input type="text" name="dept" placeholder="enter your dept" onChange={e=>setDepartment(e.target.value)}  required/>
        

        <label>Password</label>
        <input type="password" name="password" placeholder="enter your passwprd" onChange={e=>setPassword(e.target.value)} required/>
        <center>

        <button type="button"  className="reg_btn" onClick={Reg}>Register</button>
        </center>
        </form>
        </center>
        </main>
        <ToastContainer />
    </div>
  )
}

export default Register