//import Good from './../models/goods.js'
import OrderService from '../service/orderService.js'

class OrderController{
    async create(req, res){
        try{
            const order = await OrderService.create(req.body) 
            res.json(order)
        }catch(e){
            res.status(500).json(e)
        }   
    }

    async getAll(req, res){
        try{
            const order = await OrderService.getAll()
            return res.json(order)

        }catch(e){
            res.status(500).json(e)
        }
    }

    async getOne(req, res){
        try{
            const order = await OrderService.getOne(req.params.id)
            return res.json(order)
        }catch(e){
            res.status(500).json(e)
        }
    }

    async update(req, res){ 
        try{
            //const post = req.body
            //const {post._id} = req.params
            const updateOrder = await OrderService.update(req.body)
            return res.json(updateOrder)         
        }catch(e){
            res.status(500).json(e)
        }
    }

    async delete(req, res){
        try{
            const order = await OrderService.delete(req.params.id)
            return res.json(order)
        }catch(e){
            res.status(500).json(e)
        }
    }

}

export default new OrderController()