import mongoose from "mongoose";
import Joi from 'joi'

// (register number, name, course, batch, email, password

const Fine=mongoose.model('Fine',new mongoose.Schema({
   RegNo:{
    type: String,
   },
   date:{
    type:Date,
    default:Date.now()
   },
   status:{
    type:String,
    default:"Not paid",
    enum: ['Not paid', 'paid']
   },
   reason:{
    type:String,
   required:true
   },
   Datepayment:{
        type:String,
        default:null
   },
   amount:{
    type:Number,
    default:0
   }
}));

const validateStaff = (value) => {
    const schema = Joi.object({
        RegNo:Joi.required(),
        // Fund_ID:Joi.string().required(),
        // studentId:Joi.required(),
        // Faculty_ID:Joi.required(),
        reason:Joi.required(),
        Date_of_payment:Joi.required(),
        
    });
    const result = schema.validate(value)
  
    return result  
  };

export default Fine;

export {validateStaff}
