const { Crafting } = require('../../models');

const CraftingData = [];

// fences and paving
const fencesPavingCrafting = require(`./fences&paving`);
CraftingData.push(fencesPavingCrafting);

// functional items
const functionItemsCrafting = require(`./functionalItems`);
CraftingData.push(functionItemsCrafting);

// furniture
const furnitureCrafting = require(`./furniture`);
CraftingData.push(furnitureCrafting);

module.exports = CraftingData;