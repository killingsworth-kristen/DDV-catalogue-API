const { Crafting } = require('../../models');

const CraftingData = [];
function getCraftingData () {
// fences and paving
const fencesPavingCrafting = require(`./fences&paving`);
CraftingData.push(fencesPavingCrafting);

// functional items
const functionItemsCrafting = require(`./functionalItems`);
CraftingData.push(functionItemsCrafting);

// furniture
const furnitureCrafting = require(`./furniture`);
CraftingData.push(furnitureCrafting);

const NewCraftingData = Array.prototype.concat.apply([], CraftingData);

return NewCraftingData
}

module.exports = getCraftingData;