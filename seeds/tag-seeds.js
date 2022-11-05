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
    }
]

const seedTags = () => Tag.bulkCreate(TagData);

Module.exports = seedTags;