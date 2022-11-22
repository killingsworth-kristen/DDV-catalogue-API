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
    }]
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