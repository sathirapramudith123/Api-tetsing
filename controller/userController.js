import User from "../model/userModel.js"

//for posting data into databse

export const create = async(req,res)=>{

    try{
            const userData = new User(req,body);
            const {email} = userData;
            const userExist = await User.findOne({email})

            if(userExist){
                return res.status(400).json({message: "User already exit."})
            }
            const savedUser = await userData.save(); // Example user creation logic
            res.status(200).json(savedUser) //respond with the created user 

    }catch(error){
        res.status(500).json({error: "Internal Server Error."})
    }
}



//let's do basic setup

export const fetch = async(req, res)=>{
    try{
        res.json("Hello Sathira ...")

    }catch(error){
        res.status(500).json({error:"Internal Server Error"})
    }
}