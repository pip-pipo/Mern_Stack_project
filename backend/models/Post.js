import mongoose from 'mongoose'

const PostSchema = mongoose.Schema({


// title:{type:String,required:true},
// name:{type:String,required:true},
// image:{type:String,required:true},
// description:{type:String,required:true}
firstname:String,
lastname:String,
email:String,
password:String

})

const post = mongoose.model('post',PostSchema)
export default  post;