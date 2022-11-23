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
      type: Schema.Types.ObjectId,
      ref: 'Style',
    }],
    // clothingCategory: [clothingCategorySchema]
    furnitureCategory: [{
      type: Schema.Types.ObjectId,
      ref: 'FurnitureCategory',
    }],
    // color: [colorSchema]
    color: [{
      type: Schema.Types.ObjectId,
      ref: 'Color',
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