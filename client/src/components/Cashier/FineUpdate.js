import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
function FineUpdate() {
    const[Reg,setReg]=useState();
    const[status,setStatus] = useState()
    const[reason,setReason] = useState();
    // const[amount,setAmount] = useState();

    const navigate=useNavigate()



    const params=useParams()
    useEffect(()=>{
      if(! localStorage.getItem('Cashier')){
        navigate('/cashier/login')
      }
        getfineDetails()
    })
    const getfineDetails=async()=>{
        // console.warn(params);
        let result=await fetch(`http://localhost:5000/api/fine/find/${params.id}`);
        result =await result.json();
        setReg(result.RegNo)
        // setReason(result.reason)
        // setStatus(result.status)
        // setAmount(result.amount)
        // console.warn(Reg);
}

      const update=async() =>{
        axios({
            method: 'put',
            url: `http://localhost:5000/api/fine/update-fine/${params.id}`,
            data: {
                status:status
            },
            headers: {
                accept: 'application/json',
                // token:Stoken
                }
          }).then(response =>{
            console.log(response);
          }).catch(err =>{
            console.log(err);
          })
      }
  return (
    <div>
        <label>Reg_No</label>
        <input type="text" value={Reg} id="reg_no" name="reg_no" onChange={e=>setReg(e.target.value)}/>
        <label>status</label>
        <select  onChange={e=>{setStatus(e.target.value)}}>
        <option value="Not paid">Not paid</option>
          <option value="paid">paid</option>
        </select>
       <button onClick={update} >Update</button>
    </div>
  )
}

export default FineUpdate