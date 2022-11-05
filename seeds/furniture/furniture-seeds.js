const { Furniture } = require('../../models');


const FurnitureData = []

// mickey & freinds furniture
const MickeyFurniture = require('./mickey&friends');
FurnitureData.push(MickeyFurniture);

// The Sword in the Stone furniture
const SwordStoneFurniture = require(`./sword&stone`);
FurnitureData.push(SwordStoneFurniture);

// WALL-E
const walleFurniture = require(`./walle`);
FurnitureData.push(walleFurniture);

// Moana
const moanaFurniture = require(`./moana`);
FurnitureData.push(moanaFurniture);

// Ratatoille
const ratatouilleFurniture = require(`./ratatouille`);
FurnitureData.push(ratatouilleFurniture);

// Beauty and the Beast
const beatuyBeastFurniture = require(`./beauty&beast`);
FurnitureData.push(beatuyBeastFurniture);

// Wreck it Raplh
const wreckItRaplhFurniture = require(`./wreckItRalph`);
FurnitureData.push(wreckItRaplhFurniture);

// Cinderella
const cinderllaFurniture = require(`./cinderella`);
FurnitureData.push(cinderllaFurniture);

// The Lion King
const lionKingFurniture = require(`./lionKing`);
FurnitureData.push(lionKingFurniture);

// The Little Mermaid
const littleMermaidFurniture = require(`./littleMermaid`);
FurnitureData.push(littleMermaidFurniture);

// Frozen
const frozenFurniture = require(`./frozen`);
FurnitureData.push(frozenFurniture);

// Tangled
const tangledFurniture = require(`./tangled`);
FurnitureData.push(tangledFurniture);

// Monsters, Inc
const monstersIncFurniture = require(`./MonstersInc`);
FurnitureData.push(monstersIncFurniture);

// Toy Story
const toyStoryFurniture = require(`./toyStory`);
FurnitureData.push(toyStoryFurniture);

// Lilo & Stitch
const liloStitchFurniture = require(`./lilo&sticth`);
FurnitureData.push(liloStitchFurniture);

// The Incredibles
const incrediblesFurniture = require(`./incredibles`);
FurnitureData.push(incrediblesFurniture);

// Hercules
const herculesFurniture = require(`./hercules`);
FurnitureData.push(herculesFurniture);

// Coco
const cocoFurniture = require(`./coco`);
FurnitureData.push(cocoFurniture);

// Cars
const carsFurniture = require(`./cars`);
FurnitureData.push(carsFurniture);

// Lightyear
const lightyearFurniture = require(`./lightyear`);
FurnitureData.push(lightyearFurniture);

// Up
const upFurniture = require(`./up`);
FurnitureData.push(upFurniture);

// Sleeping Beauty
const sleepingBeautyFurniture = require(`./sleepingBeauty`);
FurnitureData.push(sleepingBeautyFurniture);

// Snow White
const snowWhiteFurniture = require(`./snowWhite`);
FurnitureData.push(snowWhiteFurniture);

// General
const generalFurniture = require(`./general`)
FurnitureData.push(generalFurniture)


const seedFurniture = () => Furniture.bulkCreate(FurnitureData);

Module.exports = seedFurniture;