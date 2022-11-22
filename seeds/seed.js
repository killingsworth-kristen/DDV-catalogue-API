const connection = require('../config/connection');
const { Clothing, Crafting, Furniture } = require('../models');
const { ClothingData } = require(`./clothing`)
const { CraftingData } = require(`./crafting`)
const { FurnitureData } = require(`./furniture`)

connection.once('open', async () => {
    // clears data before reseeding (remove for final version)
    Clothing.deleteMany({});
    Crafting.deleteMany({});
    Furniture.deleteMany({});

    // inserts all of the data into db
    Clothing.collection.insertMany(ClothingData);
    Crafting.collection.insertMany(CraftingData);
    Furniture.collection.insertMany(FurnitureData);
})