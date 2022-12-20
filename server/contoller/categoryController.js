//import Good from './../models/goods.js'
import CategoryService from '../service/categoryService.js'

class CategoryController{
    async create(req, res){
        try{
            const category = await CategoryService.create(req.body) 
            res.json(category)
        }catch(e){
            res.status(500).json(e)
        }   
    }

    async getAll(req, res){
        try{
            const category = await CategoryService.getAll()
            return res.json(category)

        }catch(e){
            res.status(500).json(e)
        }
    }

    async getOne(req, res){
        try{
            const category = await CategoryService.getOne(req.params.id)
            return res.json(category)
        }catch(e){
            res.status(500).json(e)
        }
    }

    async update(req, res){ 
        try{
            //const post = req.body
            //const {post._id} = req.params
            const updateCategory = await CategoryService.update(req.body)
            return res.json(updateCategory)         
        }catch(e){
            res.status(500).json(e)
        }
    }

    async delete(req, res){
        try{
            const category = await CategoryService.delete(req.params.id)
            return res.json(category)
        }catch(e){
            res.status(500).json(e)
        }
    }

}

export default new CategoryController()