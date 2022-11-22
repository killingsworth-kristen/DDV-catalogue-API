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
      type: Schema.Types.ObjectId,
      ref: 'Style',
    }],
    // clothingCategory: [clothingCategorySchema]
    clothingCategory: [{
      type: Schema.Types.ObjectId,
      ref: 'clothingCategory',
    }],
    // color: [colorSchema]
    color: [{
      type: Schema.Types.ObjectId,
      ref: 'color',
    }],
    craftingIngredients: [craftingIngredientsList]
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