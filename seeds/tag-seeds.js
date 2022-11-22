const { mainModule } = require('process');
const { Tag } = require('../models');

const TagData = [
    // style tags
    {
        tagName: "Bold" //1
    },
    {
        tagName: "Casual" //2
    },
    {
        tagName: "Cute" //3
    },
    {
        tagName: "Elegant" //4
    },
    {
        tagName: "Futuristic" //5
    },
    {
        tagName: "Modern" //6
    },
    {
        tagName: "Professional" //7
    },
    {
        tagName: "Quirky" //8
    },
    {
        tagName: "Rustic" //9
    },
    {
        tagName: "Sporty" //10
    },
    {
        tagName: "Traditional" //11
    },
    // House/zones
    {
        tagName: "Bathroom" //12
    },
    {
        tagName: "Bedroom" //13
    },
    {
        tagName: "Dining Room" //14
    },
    {
        tagName: "Kitchen" //15
    },
    {
        tagName: "Living Room" //16
    },
    {
        tagName: "Outdoors" //17
    },
    {
        tagName: "Rec Room" //18
    },
    {
        tagName: "Study" //19
    },
    // clothing types
    {
        tagName: "Back" //20
    },
    {
        tagName: "Bracelets" //21
    },
    {
        tagName: "Coats" //22
    },
    {
        tagName: "Costumes" //23
    },
    {
        tagName: "Dresses" //24
    },
    {
        tagName: "Earrings" //25
    },
    {
        tagName: "Glasses" //26
    },
    {
        tagName: "Gloves" //27
    },
    {
        tagName: "Hairstyle" //28
    },
    {
        tagName: "Hats" //29
    },
    {
        tagName: "Masks" //30
    },
    {
        tagName: "Neckwear" //31
    },
    {
        tagName: "Pants" //32
    },
    {
        tagName: "Shoes" //33
    },
    {
        tagName: "Shorts" //34
    },
    {
        tagName: "Skirts" //35
    },
    {
        tagName: "Tops" //36
    },
// add colors?
// add categories (i.e. essentials, etc.)?
// add sizes (i.e. 1x1, 2x2 etc.)?


]

const seedTags = () => Tag.bulkCreate(TagData);

Module.exports = seedTags;