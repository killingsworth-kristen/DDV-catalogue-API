const { Schema, model } = require('mongoose');

// Schema to create clothing model
const styleSchema = new Schema({
    style: {
        type: String
    }
})

const Style = model(`Style`,styleSchema)