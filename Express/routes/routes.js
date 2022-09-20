const express = require('express');
// const { model } = require('mongoose');
const router = express.Router();
const ProjectModel = require('../model/projectModel')
const bcrypt = require('bcryptjs')
require('dotenv').config()

router.post('/login', async (req, res) => {
    const encryptedUserPassword = await bcrypt.hash(process.env.PASSWORD, 10);
    console.log("you visited /login encrypted password is", encryptedUserPassword);
    // if (process.env.USER_ID === req.body.userId && await bcrypt.compare(req.body.password, encryptedUserPassword)) {
    //     res.status(200).json({ "isLoggedin": true })
    // }
    // res.status(400).json({ "isLoggedin": false })
})

// ******************************Projects related API******************************************
// Endpoints are like /projects/oeration

//Post Method
router.post('/projects/post', async (req, res) => {
    console.log(req.body)
    const data = new ProjectModel({
        name: req.body.name,
        usedTechnologies: req.body.mentionedTechnologies,
        icon: req.body.iconName,
        logo: req.body.logo
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/projects/getAll', async (req, res) => {
    try {
        const data = await ProjectModel.find();
        res.json({ data });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Get By Id Method 
router.get('/projects/getOne/:id', async (req, res) => {
    try {
        const data = await ProjectModel.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Update By Id Method 
router.patch('/projects/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = { new: true };

        const result = ProjectModel.findByIdAndUpdate(id, updateData, options);
        res.send(result);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Delete By Id
router.delete('/projects/delete', (req, res) => {
    try {
        const id = req.body.id;
        // console.log("you sent an ID ", id);
        const data = ProjectModel.findByIdAndDelete(id, function (err, docs) {
            if (err) {
                throw new Error(err)
            }
        })
        res.send(`Document with ${data.name} has been deleted...`)
    }
    catch (error) {
        res.status(400).json({ message: error.massage })
    }
})
// ******************************Projects related API END******************************************

// ******************************Blogs related API******************************************



// ******************************Blogs related API END******************************************
module.exports = router;



