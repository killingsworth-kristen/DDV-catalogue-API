const { Schema, model } = require('mongoose');

// Schema to create clothingCategory model
const clothingCategorySchema = new Schema({
    clothingCategory: {
        type: String
    }
})

const ClothingCategory = model(`ClothingCategory`,clothingCategorySchema)