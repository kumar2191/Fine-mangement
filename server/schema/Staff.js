import mongoose from "mongoose";
import Joi from 'joi'

const Staff=mongoose.model('Staff',new mongoose.Schema({
  
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isStaff:{
        type: Boolean,
        default: true
      }

}));

const validateStaff = (value) => {
    const schema = Joi.object({
      name:Joi.string(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().min(3),
    
    });
    const result = schema.validate(value)
  
    return result  
  };


export default Staff;
export {validateStaff}