
import Event from '../models/EventSchema.js';

export const EventSchema =async(req,res)=>{
    const {title,description,name,postMsg} =req.body;
    const event = await Event.create({
        title,
        description,
        name,
        postMsg
    })
    return res.json(event)
}