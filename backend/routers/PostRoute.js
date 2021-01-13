import express from 'express';
// import post from '../models/Post.js'

import {postgetroute,registerPage} from '../controllers/route.js'



const Router = express.Router();



Router.get("/",postgetroute);


Router.post("/register",registerPage);




export default Router;


