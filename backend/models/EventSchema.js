import mongoose from 'mongoose';

const EventSchema = mongoose.Schema({
    title:String,
    description:String,
    name:String,
    postMsg:String,
    
})

 const Event = mongoose.model('Event',EventSchema);

 export default Event;