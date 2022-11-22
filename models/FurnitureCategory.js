const { Schema, model } = require('mongoose');

// Schema to create clothing model
const furnitureCategorySchema = new Schema({
    furnitureCategory: {
        type: String
    }
})

const FurnitureCategory = model(`FurnitureCategory`,furnitureCategorySchema)