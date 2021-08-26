const { User } = require('../../models');

exports.createUser = async (req, res) => {
    try {
        const  { username, email } = req.body;
        const user = await User.create({
            username,
            email
        })
        res.status(400).json({ success: false, message: user });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}

exports.getUsers = async (req, res) => {
    try {
        const user = await User.findAll();
        res.status(400).json({ success: true, message: user });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}