import express from 'express';
// import post from '../models/Post.js'

import { postgetroute, registerPage, UserId } from '../controllers/route.js'
import { EventSchema } from '../controllers/EventSchema.js'
import { PostMsgRoute, PostMsgRouteGet, PostMsgRoutePut } from '../controllers/PostCont.js'


const Router = express.Router();


Router.get("/", postgetroute);

Router.post("/register", registerPage);

Router.get("/user/:id", UserId)

Router.post('/EventPost', EventSchema)

Router.post('/PostMsgs', PostMsgRoute)

Router.get('/PostMsgRouteGet', PostMsgRouteGet)
Router.put('/PostMsgRoutePut/:id', PostMsgRoutePut)

export default Router;


