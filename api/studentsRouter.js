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

router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).exec();
        res.status(200).json(student)
    } catch (error) {
        res.status(404).json({
            message: error,
        })
    }
});

router.post('/', async (req, res) => {
    const {
        firstName,
        middleName,
        lastName
    } = req.body.name;
    const {
        houseNumber,
        streetName,
        municipality,
        postalCode
    } = req.body.address;
    const {
        brgyNumber,
        zoneNumber
    } = req.body.address.brgy;
    const data = new Student({
        name: {
            firstName,
            middleName,
            lastName,
        },
        age: req.body.age,
        address: {
            houseNumber,
            streetName,
            municipality,
            brgy: {
                brgyNumber,
                zoneNumber
            },
            postalCode,
        }
    });
    try {
        const student = await data.save();
        console.log(student)
        res.status(201).json({
            message: `Successfully inserted to DB!`
        });
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
});

router.delete('/', async (req, res) => {
    try {
        await Student.deleteMany()
        res.status(201).json({
            message: 'Successfully deleted all records from DB',
        });
    } catch (error) {
        res.status(404).json({
            message: error,
        })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id).exec();
        res.status(201).json({
            message: `Successfully deleted from DB: ${student.name}`
        });
    } catch (error) {
        res.status(404).json({
            message: error,
        })
    }
});

router.patch('/:id', async (req, res) => {
    const updateData = new Student({
        name: req.body.name,
        age: req.body.age,
    });
    try {
        const student = await Student.findById(req.params.id);

        if (req.body.name) {
            student.name = req.body.name;
        }
        if (req.body.age) {
            student.age = req.body.age;
        }

        await student.save();

        res.status(201).json({
            message: `Successfully updated student with an id of: ${req.params.id}`,
        })
    } catch (error) {
        res.status(500).json({
            message: error,
        })
    }
});

module.exports = router;