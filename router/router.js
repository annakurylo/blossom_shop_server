import Router from 'express'
import GoodController from '../contoller/goodController.js'

const router = new Router()

router.post('/goods', GoodController.create)
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

export default router


