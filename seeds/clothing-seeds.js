const { mainModule } = require('process');
const { Clothing } = require('../models');

const ClothingeData = [
    // {
    //     clothingName: "",
    //     isAcquired: ,
    //     price: ,
    //     tagId: 
    // },
];

const seedClothing = () => Clothing.bulkCreate(ClothingData);

Module.exports = seedClothing;