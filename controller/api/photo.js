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

exports.updatePhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, url } = req.body;
        const photo = await Photo.findOne({ where: { id } });
        if(photo) {
            photo.name = name;
            photo.url = url;
            photo.save();
            return res.status(201).json({ success: true, message: photo });
        }
        return res.status(400).json({ success: false, message: `Photo with id:${id} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}

exports.deletePhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const photo = await Photo.findOne({ where: { id } });
        if(photo) {
            photo.destroy();
            return res.status(204).json({ success: true, message: photo });
        }
        return res.status(400).json({ success: false, message: `photo with id:${id} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: error });
    }
}