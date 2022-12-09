import express from 'express'
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import router from './router/router.js';
import cors from 'cors';

const app = express()
const PORT = 5000;
const URL = 'mongodb+srv://user:user@cluster0.helwybo.mongodb.net/?retryWrites=true&w=majority'

app.use(cors());

app.use(fileUpload({}))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', router)
app.use(express.static('static'))

mongoose.set('strictQuery', false);

// app.post('/', async (req, res) => {
//     const {image, name, price, article, available, category, quantity} = req.body;
//     const good = await Good.create({image, name, price, article, available, category, quantity})
//     res.json(good);
// })

async function startApp(){
    try{
        await mongoose.connect(URL)
        app.listen(PORT, () => console.log("server started on the port " + PORT))
    }catch(e){
        console.log(e)
    }
}

startApp()