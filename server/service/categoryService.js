import Category from '../models/category.js'

class CategoryService{
    async create(post){
        const createdCategory = await Category.create(post) 
        return createdCategory
    }

    async getAll(){
        const category = await Category.find()
        return category
    }

    async getOne(id){
        if(!id){
            throw new Error('not found id')
        }
        const category = await Category.findById(id)
        return category
    }


    async update(category){ 
        
        //const post = req.body
        //const {post._id} = req.params
        if(!category._id){
            throw new Error('not found id')
        }
        const updateCategory = await Category.findByIdAndUpdate(category._id, category, {new: true})
        return updateCategory
    }

    async delete(id){
        if(!id){
            throw new Error('not found id')
        }
        const category = await Category.findByIdAndDelete(id)
        return category
    }

}

export default new CategoryService()