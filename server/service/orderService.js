import Order from '../models/order.js'

class OrderService{
    async create(post){
        const createdOrder = await Order.create(post) 
        return createdOrder
    }

    async getAll(){
        const order = await Order.find()
        return order
    }

    async getOne(id){
        if(!id){
            throw new Error('not found id')
        }
        const order = await Order.findById(id)
        return order
    }


    async update(order){ 
        
        //const post = req.body
        //const {post._id} = req.params
        if(!order._id){
            throw new Error('not found id')
        }
        const updateOrder = await Order.findByIdAndUpdate(order._id, order, {new: true})
        return updateOrder
    }

    async delete(id){
        if(!id){
            throw new Error('not found id')
        }
        const order = await Order.findByIdAndDelete(id)
        return order
    }

}

export default new OrderService()