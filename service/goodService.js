import Good from '../models/goods.js'
import FileService from './FileService.js'

class GoodService{
    async create(good, image){
        const fileName = FileService.saveFile(image)
        const createdGood = await Good.create({...good, image: fileName}) 
        return createdGood
    }

    async getAll(){
        const good = await Good.find()
        return good
    }

    async getOne(id){
        if(!id){
            throw new Error('not found id')
        }
        const good = await Good.findById(id)
        return good
    }


    async update(good){ 
        
        //const post = req.body
        //const {post._id} = req.params
        if(!good._id){
            throw new Error('not found id')
        }
        const updateGood = await Good.findByIdAndUpdate(good._id, good, {new: true})
        return updateGood
    }

    async delete(id){
        if(!id){
            throw new Error('not found id')
        }
        const good = await Good.findByIdAndDelete(id)
        return good
    }

}

export default new GoodService()