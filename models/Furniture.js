const { Schema, model } = require('mongoose');

// Schema to create clothing model
const furnitureSchema = new Schema({
    furnituregName: {
        type: String,
        required: true
    },
    price: {
      type: Number,
      required: false
    },
    obtainedBy: {
        type: String,
        required: false,
        default: `Collecting all necessary crafting materials`
    },
    // style: [styleSchema]
    style: [{
      type: String
    }],
    // clothingCategory: [clothingCategorySchema]
    furnitureCategory: [{
      type: String
    }],
    // color: [colorSchema]
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
 const Furniture = model(`Furniture`,furnitureSchema);

 module.exports = Furniture;