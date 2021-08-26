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

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email } = req.body;
        const user = await User.findOne({ where: { id } });
        if(user) {
            user.username = username;
            user.email = email;
            user.save();
            return res.status(201).json({ success: true, message: user });
        }
        return res.status(400).json({ success: false, message: `User with id:${id} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ where: { id } });
        if(user) {
            user.destroy();
            return res.status(204).json({ success: true, message: user });
        }
        return res.status(400).json({ success: false, message: `User with id:${id} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: error });
    }
}