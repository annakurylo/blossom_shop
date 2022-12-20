import Router from 'express'
import GoodController from '../contoller/goodController.js'
import CategoryController from '../contoller/categoryController.js'
import AuthController from '../contoller/authController.js'
import OrderController from '../contoller/orderController.js'
//import { check } from 'express-validator'

const router = new Router()

router.post('/goods', /*[
    check('name', "Ім'я користувача не може бути пустим").notEmpty(),
    check('surname', "Прізвище користувача не може бути пустим").notEmpty(),
    check('number', "Номер телефону користувача не може бути пустим").notEmpty(),
    check('password', "Пароль користувача не може бути пустим").notEmpty(),
],*/ GoodController.create)
/*router.post('/posts', async (req, res) => {
    try{
        const {author, title, content, picture} = req.body
        const post = await Post.create({author, title, content, picture}) 
        res.json(post)
    }catch(e){
        res.status(500).json(e)
    }   
})*/
router.get('/goods', GoodController.getAll)
router.get('/goods/:id', GoodController.getOne)
router.put('/goods', GoodController.update)
router.delete('/goods/:id', GoodController.delete)

router.post('/categories', CategoryController.create)
router.get('/categories', CategoryController.getAll)
router.get('/categories/:id', CategoryController.getOne)
router.put('/categories', CategoryController.update)
router.delete('/categories/:id', CategoryController.delete)

router.post('/registration', AuthController.registration)
router.post('/login', AuthController.login)

router.post('/order', OrderController.create)

//router.post('/categories', CategoryController.create)

export default router


