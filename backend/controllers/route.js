import post from '../models/Post.js'
import bcrypt from 'bcrypt'
export const postgetroute = (req,res)=>{
    res.send('hello')
};

export const registerPage =async(req,res)=>{
    const {firstname,lastname,email,password} = req.body
    const existenUser = await post.findOne({email})
    
    if(!existenUser){
        const  hashPassword = await bcrypt.hash(password,10)
        const user = await post.create({
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:hashPassword
        });
        return res.json(user);
    };
    return res.status(400).json({
        message:"email/user already exist ! do you want to login instead"
    });
}