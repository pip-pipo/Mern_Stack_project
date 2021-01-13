import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Router from './routers/PostRoute.js'

const app = express();
app.use(cors())
app.use(express.json())
dotenv.config()
app.use('/posts',Router)
const PORT = process.env.PORT || 5000;

const MONGOOSE_URI = process.env.MONGOOSE_URI

mongoose.connect(MONGOOSE_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>{
    app.listen(PORT,()=>console.log(`server is runing on localhost:${PORT}`))
}).catch((e)=> console.log(`error at mongoose db connection ${e}`))






