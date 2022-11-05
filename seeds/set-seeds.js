const { mainModule } = require('process');
const { Set } = require('../models');

const SetData = [
    {
        setName: "Mickey & Friends"
    },
    {
        setName: "The Sword and the Stone"
    },
    {
        setName: "WALL-E"
    },
    {
        setName: "Moana"
    },
    {
        setName: "Ratatouille"
    },
    {
        setName: "Beauty and the Beast"
    },
    {
        setName: "Wreck-It Ralph"
    },
    {
        setName: "Cinderella"
    },
    {
        setName: "The Lion King"
    },
    {
        setName: "The Little Mermaid"
    },
    {
        setName: "Frozen"
    },
    {
        setName: "Tangled"
    },
    {
        setName: "Monsters, Inc."
    },
    {
        setName: "Toy Story"
    },
    {
        setName: "Lilo & Stitch"
    },
    {
        setName: "The Incredibles"
    },
    {
        setName: "Hercules"
    },
    {
        setName: "Coco"
    },
    {
        setName: "Cars"
    },
    {
        setName: "Lightyear"
    },
    {
        setName: "Up"
    },
    {
        setName: "Sleeping Beauty"
    },
    {
        setName: "Snow White"
    },
    {
        setName: "General"
    }
]

const seedSets = () => Set.bulkCreate(SetData);

Module.exports = seedSets;