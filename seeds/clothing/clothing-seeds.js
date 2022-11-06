const { mainModule } = require('process');
const { Clothing } = require('../../models');

const ClothingData = [];

 // {
    //     clothingName: "",
    //     isAcquired: ,
    //     price: ,
    //     tagId: 
    // },

// mickey & freinds Clothing
const MickeyClothing = require('./mickey&friends');
ClothingData.push(MickeyClothing);

// The Sword in the Stone Clothing
const SwordStoneClothing = require(`./sword&stone`);
ClothingData.push(SwordStoneClothing);

// WALL-E
const walleClothing = require(`./walle`);
ClothingData.push(walleClothing);

// Dreamlight Valley
const dreamlightValleyClothing = require(`./dreamlightValley`);
ClothingData.push(dreamlightValleyClothing);

// Moana
const moanaClothing = require(`./moana`);
ClothingData.push(moanaClothing);

// Ratatoille
const ratatouilleClothing = require(`./ratatouille`);
ClothingData.push(ratatouilleClothing);

// Beauty and the Beast
const beatuyBeastClothing = require(`./beauty&beast`);
ClothingData.push(beatuyBeastClothing);

// Wreck it Raplh
const wreckItRaplhClothing = require(`./wreckItRalph`);
ClothingData.push(wreckItRaplhClothing);

// Cinderella
const cinderllaClothing = require(`./cinderella`);
ClothingData.push(cinderllaClothing);

// The Lion King
const lionKingClothing = require(`./lionKing`);
ClothingData.push(lionKingClothing);

// The Little Mermaid
const littleMermaidClothing = require(`./littleMermaid`);
ClothingData.push(littleMermaidClothing);

// Frozen
const frozenClothing = require(`./frozen`);
ClothingData.push(frozenClothing);

// Tangled
const tangledClothing = require(`./tangled`);
ClothingData.push(tangledClothing);

// Monsters, Inc
const monstersIncClothing = require(`./MonstersInc`);
ClothingData.push(monstersIncClothing);

// Toy Story
const toyStoryClothing = require(`./toyStory`);
ClothingData.push(toyStoryClothing);

// Lilo & Stitch
const liloStitchClothing = require(`./lilo&sticth`);
ClothingData.push(liloStitchClothing);

// The Incredibles
const incrediblesClothing = require(`./incredibles`);
ClothingData.push(incrediblesClothing);

// Hercules
const herculesClothing = require(`./hercules`);
ClothingData.push(herculesClothing);

// Coco
const cocoClothing = require(`./coco`);
ClothingData.push(cocoClothing);

// Cars
const carsClothing = require(`./cars`);
ClothingData.push(carsClothing);

// Lightyear
const lightyearClothing = require(`./lightyear`);
ClothingData.push(lightyearClothing);

// Up
const upClothing = require(`./up`);
ClothingData.push(upClothing);

// Sleeping Beauty
const sleepingBeautyClothing = require(`./sleepingBeauty`);
ClothingData.push(sleepingBeautyClothing);

// Snow White
const snowWhiteClothing = require(`./snowWhite`);
ClothingData.push(snowWhiteClothing);

// General
const generalClothing = require(`./general`)
ClothingData.push(generalClothing)

const seedClothing = () => Clothing.bulkCreate(ClothingData);

Module.exports = seedClothing;