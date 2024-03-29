const { Schema, model } = require('mongoose');

// Schema to create clothing model
const furnitureSchema = new Schema({
    furnitureName: {
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
    tracked: {
      type: Boolean,
      required: true,
      default: true
    },
    image: {
      type: String
    },
    style: [{
      type: String
    }],
    furnitureCategory: [{
      type: String
    }],
    color: [{
      type: String
    }],
    universe: {
      type: String,
      required: true
    },
    added: {
      type: Number,
      required: true,
      default: 1.0
    },
    updated: {
      type: Number,
      required: false
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
 const Furniture = model(`Furniture`,furnitureSchema);

 module.exports = Furniture;