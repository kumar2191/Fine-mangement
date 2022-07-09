import Fine from '../schema/Fine.js'

const AddFine = async(req,res) =>{
    // console.log(req.body);
    try {
         let user=new Fine({
             RegNo:req.body.RegNo,
             status:req.body.status, 
             amount:req.body.amount,
             reason:req.body.reason 
         })
         const result=await user.save()
 
         res.send(result)
 
     
    } catch (error) {
     res.status(400).send(error.message)
    }
 }
 const Update=async (req, res) => {
    try {
        const date=new Date()
 
        let update=await Fine.findOneAndUpdate({_id:req.body.id},{$set:{status:req.body.status,Datepayment:date,amount:req.body.amount}},{new:true})

        res.send(update)

    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getFine=async(req, res)=>{
   try {
    let result=await Fine.find();
    res.status(200).send(result)
   } catch (error) {
    res.status(400).send(error.message)
   }
}
const fidparam=async(req, res) =>{
    // console.log(req.params.id);
    let id=req.params.id
   try {
    let result=await Fine.findOne({_id:id})
    if(result){
        res.status(200).send(result)
    }else{
        res.send({result:"No user found"})
    }
   } catch (error) {
    res.send(error.message);
   }
}

const updateParams= async(req, res) =>{
   try {
    let id=req.params.id
    // console.log(req.body);
    let result=await Fine.updateOne({_id:id},{$set:req.body},{new:true})
  res.status(200).send(result)
} catch (error) {
    res.send(error.message);
   }

}
// const find=async(req, res) =>{
//     try {
//         let data=await Fine.find();
//         res.send(data)
//     } catch (error) {
//         res.send(error.message);
//     }
// }

const getFie=async(req, res)=>{
    try {
     let result=await Fine.find({RegNo:req.user.RegNo});
     res.status(200).send(result)
    } catch (error) {
     
    }
 }

 const paid=async(req,res)=> {
    let data=await Fine.aggregate([
        {$group:{_id:{status:"$status"},total:{$sum:"$amount"}}}
        , {$match:{"_id.status":"paid"}}
    ])
    res.status(200).send(data)
 }
 const notpaid=async(req,res)=> {
    let data=await Fine.aggregate([
        {$group:{_id:{status:"$status"},total:{$sum:"$amount"}}}
        , {$match:{"_id.status":"Not paid"}}
    ])
    // console.log(data);
    // data.map((item,i)=>{
    //     console.log(item._id.status);
    // })
    res.status(200).send(data)
 }


 export default {AddFine,updateParams,Update,getFine,fidparam,getFie,paid,notpaid}