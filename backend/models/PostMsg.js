import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true}
})


const PostSchema = mongoose.model('PostSchema',postSchema);

export default PostSchema