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
        postalCode,
        brgyName
    } = req.body.address;
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
            brgyName,
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

router.put('/:id', async (req, res) => {
    const {
        firstName,
        middleName,
        lastName
    } = req.body.name;
    const {
        houseNumber,
        streetName,
        municipality,
        postalCode,
        brgyName
    } = req.body.address;
    try {
        const student = await Student.findById(req.params.id);

        if (firstName) {
            student.name.firstName = firstName;
        }
        if (middleName) {
            student.name.middleName = middleName;
        }
        if (lastName) {
            student.name.lastName = lastName;
        }

        if (houseNumber) {
            student.address.houseNumber = houseNumber;
        }
        if (streetName) {
            student.address.streetName = streetName;
        }
        if (municipality) {
            student.address.municipality = municipality;
        }
        if (postalCode) {
            student.address.postalCode = postalCode;
        }

        if (brgyName) {
            student.address.brgyName = brgyName;
        }
        if (zoneNumber) {
            student.address.zoneNumber = zoneNumber;
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