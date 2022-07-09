import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function StudentUpdate() {
    const[name,setName] = useState();
    const[department,setDepartment] = useState();
    const[section,setSection] = useState();
   const [Stoken,setSToken] =useState();
   
const navigate=useNavigate();
  
   useEffect(() => {
   setSToken( localStorage.getItem('token'));
   console.error(Stoken);
   },[Stoken]);
   useEffect(() => {
    if(! localStorage.getItem('token')){
        navigate('/Student/login')
      }
     },[])
    const Update=async() =>{
    axios({
        method: 'post',
        url: 'http://localhost:5000/api/student/update',
        data: {
            name:name,
            Dept:department,
            Section:section,
        },
        headers: {
            accept: 'application/json',
            token:Stoken
            }
      });
      toast.success('🦄 successfully UPDATED!!!', {
        className:"toast-success",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    };
   const pass=() =>{
    navigate('/Student/changepassword')
   }
    
  return (
    <center>
<br /><br /><br />
    <div className="log">
  <form><br /><br />
        <label>Name</label>
        <input type="text" name="name" placeholder="enter your name" onChange={e=>setName(e.target.value)}  required  /><br /><br />
       <label>Section</label>
        <select onChange={e=>setSection(e.target.value)}  required>
            <option></option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            
        </select><br /><br />
        <label>Department</label>
        <input type="text" name="dept" placeholder="enter your dept" onChange={e=>setDepartment(e.target.value)}  required/>
             
        </form><br /><br />
        <button className="btn" type="button" onClick={Update}>Register</button>
        <br></br><br /><br />
        <button className="btn"onClick={pass}>Password Change</button>

        <ToastContainer />
    </div>
    </center>
  )
}

export default StudentUpdate