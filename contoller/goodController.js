//import Good from './../models/goods.js'
import GoodService from '../service/goodService.js'

class GoodController{
    async create(req, res){
        try{
            console.log(req.files)
            const good = await GoodService.create(req.body, req.files.image) 
            res.json(good)
        }catch(e){
            res.status(500).json(e)
        }   
    }

    async getAll(req, res){
        try{
            const good = await GoodService.getAll()
            return res.json(good)

        }catch(e){
            res.status(500).json(e)
        }
    }

    async getOne(req, res){
        try{
            const good = await GoodService.getOne(req.params.id)
            return res.json(good)
        }catch(e){
            res.status(500).json(e)
        }
    }

    async update(req, res){ 
        try{
            //const post = req.body
            //const {post._id} = req.params
            const updateGood = await GoodService.update(req.body)
            return res.json(updateGood)         
        }catch(e){
            res.status(500).json(e)
        }
    }

    async delete(req, res){
        try{
            const good = await GoodService.delete(req.params.id)
            return res.json(good)
        }catch(e){
            res.status(500).json(e)
        }
    }

}

export default new GoodController()