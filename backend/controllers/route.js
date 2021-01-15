import post from '../models/Post.js'
// import bcrypt from 'bcrypt'
export const postgetroute = (req, res) => {
    res.send('hello')
};

export const registerPage = async (req, res) => {
    const { firstname, lastname, email, password } = req.body
    const existenUser = await post.findOne({ email })

    if (!existenUser) {
        // const  hashPassword = await bcrypt.hash(password,10)
        const user = await post.create({
            firstname,
            lastname,
            email,
            password,
        });
        return res.json(user);
    };
    return res.status(400).json({
        message: "email/user already exist ! do you want to login instead"
    });
}

export const UserId = async (req, res) => {
    const userId = req.params;
    try {

        const user = post.findById(userId);
        return res.json(user)
    } catch (error) {
        res.status(404).json({
            message:'User Id Does not exist, do you want to login instead',
        })
    }
}