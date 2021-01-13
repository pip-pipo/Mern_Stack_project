import express from 'express';

import {postgetroute} from '../controllers/route.js'

const Router = express.Router();



Router.get("/",postgetroute);


export default Router;


