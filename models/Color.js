const { Schema, model } = require('mongoose');

// Schema to create color model
const colorSchema = new Schema({
    color: {
        type: String
    }
})

const Color = model(`Color`,colorSchema)