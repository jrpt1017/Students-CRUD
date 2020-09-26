const express = require('express');
const router = express.Router();
const Student = require('../model/studentsModel');

router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
})

router.post('/', async (req, res) => {
    console.log('POST!')
    console.log(req.body)
    const data = new Student({
        name: req.body.name,
        age: req.body.age,
    });
    try {
        const student = await data.save();
        res.status(201).json(student);
    } catch (error) {
        console.log('catch')
        res.status(400).json({
            message: error,
        });
    }
});

module.exports = router;