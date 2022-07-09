import mongoose from "mongoose";
import Joi from 'joi'


// (Register Number, name, batch or class, course, section, department, date of registration, email and password)

const Student=mongoose.model('Student',new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    RegNo:{
        type: String,
        required: true,
        unique: true
    },
    // Course:{
    //     type: String,
    //     required: true
    // },
    Dept:{
        type: String,
        required: true
    },
    Section:{
        type: String,
        default:"A"
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
    date: {
        type: Date,
        default: Date.now
      },
      isCashier:{
        type: Boolean,
        default: false
      }
}));

const validateStudent= (value) => {
    const schema = Joi.object({
      name: Joi.string().min(3),
      RegNo:Joi.string(),
      Course:Joi.string().min(3),
    //   batch:Joi.number().min(4),
    Section:Joi.string(),
      Dept:Joi.string(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().min(4),

    });
    const result = schema.validate(value)
  
    return result  
  };

export default Student;

export {validateStudent}