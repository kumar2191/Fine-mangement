import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './styles/profile.css'
function Profile() {
    const [data,setData]= useState([]);
    const [Stoken,setToken]= useState();
        
    const navigate=useNavigate();
    useEffect(() => {
        if(! localStorage.getItem('token')){
            navigate('/Student/login')
          }else{
            setToken( localStorage.getItem('token'));
            console.error(Stoken);
            axios({
                method:"get",
                url:"http://localhost:5000/api/student/profile",
                headers:{
                    accept: 'application/json',
                    token:Stoken
                }
            }).then(res=>{
                setData(res.data)
            }).catch(err=>{
                console.error(err.message);
            })
          }
       
        },[Stoken]);

console.warn(data);
// console.log(data.name);
const nav=()=>{
    navigate('/Student/Update')
}
const logout = ()=>{
    localStorage.clear()
    navigate('/')
}
const Finelist=()=>{
    navigate('/Student/fine/data')
}
  return (
    <div>
        <h1>Profile view</h1>
<tabel>
    <thead>
    <tr>
    <th>name</th>
    <th>RegNo</th>
    <th>Dept</th>
    <th>Section</th>
    <th>E-mail</th>
    </tr>

    </thead>
            <tbody>
            <tr>
                <td>{data.name}</td>
                <td>{data.RegNo}</td>
                <td>{data.Dept}</td>
                <td>{data.Section}</td>
                <td>{data.email}</td>
            </tr>
           </tbody>
          
        

</tabel><br /><br />
        <button onClick={nav} className="cashier">Edit</button>
        <br /><br />
        <button onClick={Finelist} className="cashier">Fine-list</button>
        <br /><br />
        <button onClick={logout} className="cashier">Log-out</button>
    </div>
  )
}

export default Profile