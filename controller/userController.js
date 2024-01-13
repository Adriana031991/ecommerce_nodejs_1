const User = require('../models/userModel')

const createUser = async (req, res) => {
    console.log(req.body);

    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        const newUser = User.create(req.body)
        res.json(newUser)
    } else {
        res.json({
            msg: 'User already exists',
            success: false,
            body: findUser
        })
    }
}

module.exports = {
    createUser
}