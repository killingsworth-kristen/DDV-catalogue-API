const connection = require('../config/connection');
const { Clothing, Crafting, Furniture } = require('../models');
const getClothingData = require(`./clothing`)
const getCraftingData = require(`./crafting`)
const getFurnitureData = require(`./furniture`)


connection.once('open', async () => {
    console.log("connected!")
    // clears data before reseeding (remove for final version)
    await Clothing.deleteMany({});
    await Crafting.deleteMany({});
    await Furniture.deleteMany({});
    
    // inserts all of the data into db
    await Clothing.insertMany(getClothingData());
    await Crafting.insertMany(getCraftingData());
    await Furniture.insertMany(getFurnitureData());

    console.log("data seeded!")
})