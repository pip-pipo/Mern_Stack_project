import PostSchema from '../models/PostMsg.js'

// post
export const PostMsgRoute = async (req, res) => {
  const { title, description, name, email } = req.body;

  const emailexistCheack = await PostSchema.findOne({ email });

  if (!emailexistCheack) {
    const msg = await PostSchema.create({
      title, description, name, email
    })
    return res.json(msg)
  }else{
    res.status(404).json({
      message:"this email already exist",
    })
  }
}

// get
export const PostMsgRouteGet = async (req, res) => {
  PostSchema.find((error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      res.json(data)
    }

  })

}
// put
export const PostMsgRoutePut = async (req, res) => {
  PostSchema.findByIdAndUpdate(req.params.id,(error, data) => {
    if (error) {
      console.log(error);
    } else {
      // console.log(data);
      res.json(data)
    }
  })
}