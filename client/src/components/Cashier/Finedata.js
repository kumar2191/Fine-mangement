import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './fine.css'
import {Link,useNavigate}from "react-router-dom"


function Finedata() {
  const [data,setData]=useState([])
  const [token,setToken] = useState()
  const[paid,setPaid] = useState([])
  const[notpaid,setNotPaid] = useState([])

  const navigate=useNavigate()


  // useEffect(() => {
    
  // },[token])
  useEffect(() => {
    if(! localStorage.getItem('Cashier')){
      navigate('/cashier/login')

    }
   
    axios({
      method:"get",
      url:"http://localhost:5000/api/fine/get",
      headers:{
          accept: 'application/json',
          token:token
      }
  }).then(response=>{
    setData(response.data);
  }).catch(err =>console.log(err.message))
  // gettoken()
  },[])


useEffect(() => {
  axios.get("http://localhost:5000/api/fine/notpaid")
  .then(response=>{
   setNotPaid(response.data);
  })
},[])



  // console.log(data);
  const back=()=>{
    navigate('/cashier/finepage')
  }

  return (
    <div className="fine-list" >
      <h1>Fine-List</h1>

          <ul>
             <li>S.No</li> 
            <li>reason</li>
            {/* <li>reason</li> */}
            <li>RegNo</li>
            {/* <li>date</li> */}
            <li>status</li>
            <li>amount</li>
            {/* <li>Delete</li> */}
            <li>update</li>
            {/* <li>Datepayment</li> */}
            {/* <li>amount</li> */}
        </ul>
        {
         data.length>0? data.map((item,i)=>{
           return( <ul key={item._id}>
            <li>{i+1}</li>
              <li>{item.reason}</li>
            <li>{item.RegNo}</li>
            {/* <li>{item.date}</li> */}
            <li>{item.status}</li>
            <li>{item.amount}</li>
            {/* <li>{item.Datepayment}</li> */}
            {/* <li>{item._id}</li> */}
            <li><Link to={"/cashier/update/"+item._id}>Update</Link></li>
            </ul>)
          }):<h1>No result found</h1>
        }
{/* {
  notpaid.map((item,i)=>{
   return(
    <h2>{item._id}</h2>
   )
  })
} */}

        <button onClick={back}>Back</button>
    </div>
  )
}

export default Finedata