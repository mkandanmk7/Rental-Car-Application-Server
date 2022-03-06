
const User=require('../models/userModel');

const service={

    async registerUser(req,res){
       
        
        try {
            const newUser=new User(req.body);
        await newUser.save();
        res.status(200).send("Register successfully");
        } catch (error) {
            res.status(400).send(error.message);
            console.log("err",error.message)
        }
    },

    //sign in 

    async signInUser(req,res){
        try {
            const {username,password}=req.body;
            const user=await User.findOne({username,password});
            if(user){
                res.status(200).send(user);

            }
            else{
                res.status(403).send("username ,password is wrong...!")
            }
        } catch (err) {
            res.status(400).send("Bad request");
            console.log('err', err.message)
        }
    }

}

module.exports=service;