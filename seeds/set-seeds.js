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
        setName: "DreamLight Valley" //4
    },
    {
        setName: "Moana" //4->5
    },
    {
        setName: "Ratatouille" //5->6
    },
    {
        setName: "Beauty and the Beast" //6->7
    },
    {
        setName: "Wreck-It Ralph" //7->8
    },
    {
        setName: "Cinderella" //8->9
    },
    {
        setName: "The Lion King" //9->10
    },
    {
        setName: "The Little Mermaid" //10->11
    },
    {
        setName: "Frozen" //11->12
    },
    {
        setName: "Tangled" //12->13
    },
    {
        setName: "Monsters, Inc." //13->14
    },
    {
        setName: "Toy Story" //14->15
    },
    {
        setName: "Lilo & Stitch" //15->16
    },
    {
        setName: "The Incredibles" //16->17
    },
    {
        setName: "Hercules" //17->18
    },
    {
        setName: "Coco" //18->19
    },
    {
        setName: "Cars" //19->20
    },
    {
        setName: "Lightyear" //20->21
    },
    {
        setName: "Up" //21->22
    },
    {
        setName: "Sleeping Beauty" //22->23
    },
    {
        setName: "Snow White" //23->24
    },
    {
        setName: "General" //24->25
    },
    {
        setName: "Functional Items" //25->26
    },
    {
        setName: "Furniture" //crafted furniture only 26->27
    },
    {
        setName: "Fences and Paving" //27->28
    }
]

const seedSets = () => Set.bulkCreate(SetData);

Module.exports = seedSets;