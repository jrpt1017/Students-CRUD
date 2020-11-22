const mongoose = require('mongoose');
const {
    v4: uuidv4
} = require('uuid');

const nameSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    }
}, {
    _id: false
});

const addressSchema = mongoose.Schema({
    houseNumber: {
        type: Number,
        required: true,
    },
    streetName: {
        type: String,
        required: true,
    },
    municipality: {
        type: String,
        required: true,
    },
    brgyName: {
        type: String,
        required: true,
    },
    postalCode: {
        type: Number,
        required: true,
    },
}, {
    _id: false
})

const studentSchema = mongoose.Schema({
    name: nameSchema,
    age: {
        type: Number,
    },
    address: addressSchema,
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Student', studentSchema);