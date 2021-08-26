const { Photo } = require('../../models');

exports.createPhoto = async (req, res) => {
    try {
        const  { name, url } = req.body;
        const photo = await Photo.create({
            name,
            url
        })
        res.status(400).json({ success: true, message: photo });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}

exports.getPhotos = async (req, res) => {
    try {
        const photo = await Photo.findAll();
        res.status(400).json({ success: true, message: photo });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}