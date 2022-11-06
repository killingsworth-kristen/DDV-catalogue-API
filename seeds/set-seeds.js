const { mainModule } = require('process');
const { Set } = require('../models');

const SetData = [
    {
        setName: "Mickey & Friends" //1
    },
    {
        setName: "The Sword and the Stone" //2
    },
    {
        setName: "WALL-E" //3
    },
    {
        setName: "Moana" //4
    },
    {
        setName: "Ratatouille" //5
    },
    {
        setName: "Beauty and the Beast" //6
    },
    {
        setName: "Wreck-It Ralph" //7
    },
    {
        setName: "Cinderella" //8
    },
    {
        setName: "The Lion King" //9
    },
    {
        setName: "The Little Mermaid" //10
    },
    {
        setName: "Frozen" //11
    },
    {
        setName: "Tangled" //12
    },
    {
        setName: "Monsters, Inc." //13
    },
    {
        setName: "Toy Story" //14
    },
    {
        setName: "Lilo & Stitch" //15
    },
    {
        setName: "The Incredibles" //16
    },
    {
        setName: "Hercules" //17
    },
    {
        setName: "Coco" //18
    },
    {
        setName: "Cars" //19
    },
    {
        setName: "Lightyear" //20
    },
    {
        setName: "Up" //21
    },
    {
        setName: "Sleeping Beauty" //22
    },
    {
        setName: "Snow White" //23
    },
    {
        setName: "General" //24
    },
    {
        setName: "Functional Items" //25
    },
    {
        setName: "Furniture" //crafted furniture only 26
    },
    {
        setName: "Fences and Paving" //27
    }
]

const seedSets = () => Set.bulkCreate(SetData);

Module.exports = seedSets;