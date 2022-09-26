const express = require('express');
// const { model } = require('mongoose');
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const router = express.Router();
const ProjectModel = require('../model/projectModel')
const bcrypt = require('bcryptjs')
// import dayjs from "dayjs";
const dayjs = require('dayjs')
// const serialize = require('cookie')
require('dotenv').config()

router.post("/dashboard", auth, (req, res) => {
    res.status(200).send({ message: "Congratulation! You have access to the Page" });
});

router.post('/login', async (req, res) => {
    try {
        const encryptedUserPassword = await bcrypt.hash(process.env.PASSWORD, 10);
        if (process.env.USER_ID === req.body.userId && await bcrypt.compare(req.body.password, encryptedUserPassword)) {
            const token = jwt.sign(
                { user_id: process.env.USER_ID },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "5h",
                }
            );
            // res.setHeader('Set-Cookie', [`token=${token};`]);
            const dataToSecure = { token };

            res.cookie("secureCookie", JSON.stringify(dataToSecure), {
                secure: process.env.NODE_ENV !== "development",
                httpOnly: true,
                expires: dayjs().add(5, "h").toDate(),
            });
            res.status(200).json({ message: "Congratulations! You've loggedin Succesfully." })
            // res.send("Hello Cookie has been inserted succesfully");
        } else {
            throw new Error("Invalid Credentials")
        }

    } catch (err) {
        return res.status(400).send({ message: err.message });
    }
})

// ******************************Projects related API******************************************
// Endpoints are like /projects/oeration

//Post Method
router.post('/projects/post', async (req, res) => {
    const data = new ProjectModel({
        name: req.body.name,
        usedTechnologies: req.body.mentionedTechnologies,
        icon: req.body.iconName,
        logo: req.body.logo
    })

    try {
        if (await data.save()) {
            res.status(200).json({ message: "Congratulations! Your project has been uploaded successfully" });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/projects/getAll', async (req, res) => {
    try {
        let data = await ProjectModel.find();
        res.status(200).json({ data });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Get By Id Method 
router.get('/projects/getOne/:id', async (req, res) => {
    try {
        const data = await ProjectModel.findById(req.params.id);
        if (data.length === 0) {
            res.status(404).json({ message: "Projects not found" })
        }
        res.status(200).json({ data });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
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
        res.status(500).json({ message: error.message });
    }
})

//Delete By Id
router.delete('/projects/delete', (req, res) => {
    try {
        const id = req.body.id;
        ProjectModel.findByIdAndDelete(id, async (err, docs) => {
            if (err) {
                throw new Error(err)
            }
            res.status(200).json({ message: `Successfully Deleted Project, had Id ${id}` });
        })
    }
    catch (error) {
        res.status(400).json({ message: error.massage })
    }
})
// ******************************Projects related API END******************************************

// ******************************Blogs related API******************************************



// ******************************Blogs related API END******************************************
module.exports = router;



