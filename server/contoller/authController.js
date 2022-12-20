import User from '../models/user.js'
import bcrypt from 'bcryptjs';
//import { validationResult } from 'express-validator'




class AuthController{
    async registration(req, res){
        try{
            /*const errors = validationResult(req);
            if(!errors.isEmpty()){
                res.status(400).json({message: "Помилка при реєстрації"})
            }*/
            const {name, surname, number, street, house, password} = req.body;
            const candidate = await User.findOne({number});
            if(candidate){
                return res.json({message: "A user with this phone number already exists", status:'fail'})
            }
            const hashPassword = bcrypt.hashSync(password, 7)
            const user = new User({name, surname, number, street, house, password: hashPassword});
            await user.save()
            return res.json({message: "User was registered", status:'success'})
        }catch(e){
            return res.status(500).json(e)
        }   
    }

    async login(req, res){
        try{
            const {number, password} = req.body;
            const user = await User.findOne({number});
            if(!user){
                return res.json({message: "User not registered", status:'fail'})
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if(!validPassword){
                return res.json({message: "Invalid password", status:'fail'})
            }
            if(user && validPassword){
                const id = user._id;
                return res.json({message: "User was login", status: id})
            }
            
        }catch(e){
            return res.status(500).json(e)
        }
    }

}

export default new AuthController()