const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    employee_name:{
        type:String,
        required:true
    },
    employee_id:{
        type:String,
        required:true,
        unique: true
    },
    department:{
        type:String,
        required:true,
    },
    work_mode:{
        type:String,
        required:true,
    },
    joining_date:{
        type:Date,
        required:true,
        get:function(value){
                if(!value) return null;
                return value.toLocaleDateString('en-GB')
        },
        set:function(value){
            if(!value) return undefined;
            if(typeof value==='string'){
                const [day,month,year] = value.split('/');
                return new Date(`${year}-${month}-${day}`);
            }
            return value ;
        }
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:0 // 0 => Normal employee , 1=> Director ,2 => Project Manager , 3 => Hr 
    },
})

module.exports =  mongoose.model('User',userSchema)