const Set = require(`../../models`)
const Tag = require(`../../models`)

// 26 pieces of furniture

const toyStoryFurniture = [
    {
        furnitureName: `"Show Your Strength" Test`,
        price: null,
        obtainedBy: "Scrooge's Store",
        tagId: [],
        setId: 15
    },
    {
        furnitureName: `Alien Guessing Booth`,
        price: 6400,
        obtainedBy: "Scrooge's Store",
        tagId: [5,8,18],
        setId: 15
    },
    {
        furnitureName: `Chest Coffee Table`,
        price: 3520,
        obtainedBy: "Scrooge's Store",
        tagId: [8,9,16,18],
        setId: 15
    },
    {
        furnitureName: `Cloudy Island`,
        price: 3520,
        obtainedBy: "Scrooge's Store",
        tagId: [3,18,19],
        setId: 15
    },
    {
        furnitureName: `Cloudy Lamp`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,13,18,19],
        setId: 15
    },
    {
        furnitureName: `Coffee Cart`,
        price: 7040,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,16,19],
        setId: 15
    },
    {
        furnitureName: `Colorful L Couch`,
        price: 6000,
        obtainedBy: "Founder's Pack: Deluxe Edition",
        tagId: [],
        setId: 15
    },
    {
        furnitureName: `Entertainment System`,
        price: 7200,
        obtainedBy: "Founder's Pack: Deluxe Edition",
        tagId: [],
        setId: 15
    },
    {
        furnitureName: `Geometric Side Table`,
        price: 880,
        obtainedBy: "Scrooge's Store",
        tagId: [6,8,10,13,16],
        setId: 15
    },
    {
        furnitureName: `Graphic Sofa`,
        price: 3000,
        obtainedBy: "Founder's Pack: Deluxe Edition",
        tagId: [],
        setId: 15
    },{
        furnitureName: `Half-Arch Window Left`,
        price: 8000,
        obtainedBy: "Founder's Pack: Deluxe Edition",
        tagId: [],
        setId: 15
    },
    {
        furnitureName: `Half-Arch Window Right`,
        price: 8000,
        obtainedBy: "Founder's Pack: Deluxe Edition",
        tagId: [],
        setId: 15
    },
    {
        furnitureName: `Half-Cup Chair`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        tagId: [3,8,16,18],
        setId: 15
    },
    {
        furnitureName: `Hydrangea Bundle`,
        price: 5760,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,13,14,16],
        setId: 15
    },
    {
        furnitureName: `Lively Coffee Table`,
        price: 3520,
        obtainedBy: "Founder's Pack: Deluxe Edition",
        tagId: [],
        setId: 15
    },
    {
        furnitureName: `Photo Booth`,
        price: 6400,
        obtainedBy: "Scrooge's Store",
        tagId: [6,8,17,18],
        setId: 15
    },
    {
        furnitureName: `Popcorn Machine`,
        price: 7360,
        obtainedBy: "Scrooge's Store",
        tagId: [8,11,15,17,18],
        setId: 15
    },
    {
        furnitureName: `Red Drapery`,
        price: 1200,
        obtainedBy: "Scrooge's Store",
        tagId: [8,11,13,18],
        setId: 15
    },
    {
        furnitureName: `Rocket Painting`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        tagId: [3,5,13,16,18,19],
        setId: 15
    },
    {
        furnitureName: `Stage Curtain Left`,
        price: 1200,
        obtainedBy: "Scrooge's Store",
        tagId: [8,11,13,18],
        setId: 15
    },
    {
        furnitureName: `Stage Curtain Right`,
        price: 1200,
        obtainedBy: "Scrooge's Store",
        tagId: [8,11,13,18],
        setId: 15
    },
    {
        furnitureName: `Starry Chair`,
        price: 2400,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,18,19],
        setId: 15
    },
    {
        furnitureName: `Starry Stool`,
        price: 1800,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,15,16,19],
        setId: 15
    },
    {
        furnitureName: `Star-Shaped Neon Decoration`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        tagId: [3,8,13,16,18],
        setId: 15
    },
    {
        furnitureName: `Step-Up Stool`,
        price: 2400,
        obtainedBy: "Scrooge's Store",
        tagId: [3,8,17,18],
        setId: 15
    },
    {
        furnitureName: `Vibrant Wall Planter`,
        price: 2800,
        obtainedBy: "Founder's Pack: Deluxe Edition",
        tagId: [],
        setId: 15
    },
]

module.exports=toyStoryFurniture