const User = require('../models/userModel');
const Face = require('../models/faceModel') ;
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const registerUser = async(req,res)=>{
    try{
        const errors =  validationResult(req);
        if(!errors.isEmpty()){
            return res.status(200).json({
                sucess:false,
                msg:'Error',
                errors: errors.array()
            })
        }
        const {employee_name,employee_id,department,work_mode,joining_date,email,password} = req.body;

        const isExistUser = await User.findOne({ employee_id });
        if(isExistUser){
            return res.status(200).json({
                sucess:false,
                msg:'Employee Details already exists!'
            }) 
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const user = new User({
            employee_name,employee_id,department,work_mode,joining_date,email,password:hashedPassword
        })
        const userData = await user.save();
        return res.status(200).json({
            sucess:true,
            msg:'User registered successfully.',
            data:userData
        })

    }
    catch(error)
    {
        return res.status(400).json({
            sucess:false,
            msg:error.message
        })
    }
}
// register face 
const registerFace = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          msg: 'Validation error',
          errors: errors.array()
        });
      }
  
      const { base64Image, userId } = req.body;
  
      // Create a new face entry
      const newFace = new Face({ base64Image, user: userId });
      await newFace.save();
  
      return res.status(201).json({
        success: true,
        msg: 'Face data registered successfully',
        data: newFace
      });
    } catch (error) {
      console.error('Error registering face data:', error.message);
      return res.status(500).json({
        success: false,
        msg: 'Internal server error'
      });
    }
  };


// generate secret token
const generateAccessToken = async(user) =>{
    const token =  jwt.sign(user,process.env.ACCESS_SECRET_TOKEN,{ expiresIn:"2h" });
    return token;
}
const loginUser = async(req,res)=>{
        try{
            const errors =  validationResult(req);
            if(!errors.isEmpty()){
                return res.status(200).json({
                    sucess:false,
                    msg:'Error',
                    errors: errors.array()
                })
            }
            const {email,password} = req.body;
            const userData = await User.findOne({ email })
            if(!userData){
                return res.status(400).json({
                    sucess:false,
                    msg:'Email & Password is incorrect!'
                }) 
            }
            const isPasswordMatch = await bcrypt.compare(password,userData.password);
            if(!isPasswordMatch){
                return res.status(400).json({
                    sucess:false,
                    msg:'Email & Password is incorrect!'
                })  
            }

            const accessToken = await generateAccessToken({ user:userData })
            return res.status(200).json({
                sucess:true,
                msg:'Login Successfully!',
                accessToken :accessToken,
                tokenType : "Bearer",
                data:userData
            })

        }
        catch(error){
            return res.status(400).json({
                sucess:false,
                msg:error.message
            })
        }
}
module.exports = {
    registerUser,loginUser,registerFace
}