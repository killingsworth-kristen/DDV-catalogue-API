const Set = require(`../../models`)
const Tag = require(`../../models`)

const tangledFurniture = [
    {
        furnitureName: `Barrel Table`,
        price: 3520,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,13,16,19],
        set: "Tangled"
    },
    {
        furnitureName: `Bear Armchair`,
        price: 2400,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,14,16,18,19],
        set: "Tangled"
    },
    {
        furnitureName: `Cozy Couch`,
        price: 3000,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,13,16,18],
        set: "Tangled"
    },
    {
        furnitureName: `Day & Night Paintings`,
        price: 1275,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,18,19],
        set: "Tangled"
    },
    {
        furnitureName: `Easel`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,18,19],
        set: "Tangled"
    },
    {
        furnitureName: `Guitar`,
        price: 2400,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,18,19],
        set: "Tangled"
    },
    {
        furnitureName: `Helmet Lamp`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,16,18,19],
        set: "Tangled"
    },
    {
        furnitureName: `Homey Rug`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,13,16,19],
        set: "Tangled"
    },
    {
        furnitureName: `Horned Tavern Fireplace`,
        price: 600,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,14,16,18],
        set: "Tangled"
    },
    {
        furnitureName: `Lantern Garland`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,13,18],
        set: "Tangled"
    },
    {
        furnitureName: `Lounge Pillows`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,13,16,18],
        set: "Tangled"
    },
    {
        furnitureName: `Mother Gothel's Standing Mirror`,
        price: 16000,
        obtainedBy: "Village Project: Restoring the Sunstone (Mother Gothel Level 10)",
        
        tagId: [4,11,12,13],
        set: "Tangled"
    },
    // needs pricing data
    {
        furnitureName: `Painting Table`,
        price: null,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,18,19],
        set: "Tangled"
    },
    {
        furnitureName: `Plain Bed`,
        price: 4600,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,13],
        set: "Tangled"
    },
    {
        furnitureName: `Provincial Window`,
        price: 3200,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,13,15,16],
        set: "Tangled"
    },
    {
        furnitureName: `Pub Sign`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        
        tagId: [3,8,9,12,15,18],
        set: "Tangled"
    },
    {
        furnitureName: `Rustic Chandelier`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,14,15,16],
        set: "Tangled"
    },
    {
        furnitureName: `Simple Stool`,
        price: 1800,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,14,16,19],
        set: "Tangled"
    },
    {
        furnitureName: `Spray-Painted Window`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,18,19],
        set: "Tangled"
    }
]

module.exports=tangledFurniture