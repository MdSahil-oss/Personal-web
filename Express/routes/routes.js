const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const Model = require('../model/model')
//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        desciption: req.body.description,
        usedTechnologies: req.body.usedTechnologies,
        icon: req.body.icon,
        logo: req.body.logo
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
    // console.log(req.body)
    // res.send("request recieved")
})

router.post('/login', (req, res) => {
    console.log(req.body.userId, req.body.password)
})

//Get all Method
router.get('/', async (req, res) => {
    try {
        const data = await Model.find();
        console.log(data)
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Get By Id Method 
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Update By Id Method 
router.patch('update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = { new: true };

        const result = Model.findByIdAndUpdate(id, updateData, options);
        res.send(result);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Delete By Id
router.delete('/delete/:id', (req, res) => {
    try {
        const id = req.params.id;
        const data = Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted...`)
    }
    catch (error) {
        res.status(400).json({ message: error.massage })
    }
})

module.exports = router;