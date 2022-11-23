const { Schema, model } = require('mongoose');

// Schema to create clothing model
const craftingSchema = new Schema({
    craftingName: {
        type: String,
        required: true
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
    craftingCategory: {
      type: String,
    },
    // color: [colorSchema]
    color: [{
      type: String
    }],
    craftingIngredients: [{
      type: String
    }],
    furnitureCategory: [{
      type: String
    }]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
 const Crafting = model(`Crafting`,craftingSchema);

 module.exports = Crafting;