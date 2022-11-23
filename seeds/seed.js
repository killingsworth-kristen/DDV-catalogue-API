const connection = require('../config/connection');
const { Clothing, Crafting, Furniture } = require('../models');
const getClothingData = require(`./clothing`)
const getCraftingData = require(`./crafting`)
const getFurnitureData = require(`./furniture`)


connection.once('open', async () => {
    // clears data before reseeding (remove for final version)
    Clothing.collection.drop();
    Crafting.collection.drop();
    Furniture.collection.drop();
    
    // inserts all of the data into db
    Clothing.collection.insertMany(getClothingData());
    Crafting.collection.insertMany(getClothingData());
    Furniture.collection.insertMany(getFurnitureData());
})