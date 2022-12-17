const { Schema, model } = require('mongoose');

// Schema to create clothing model
const clothingSchema = new Schema({
    clothingName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    obtainedBy: {
        type: String,
        required: true,
        default: `Scrooge's Store`
    },
    style: [{
      type: String,
    }],
    clothingCategory: {
      type: String
    },
    color: [{
      type: String
    }],
    universe: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Clothing = model(`Clothing`,clothingSchema)

module.exports = Clothing;