const Set = require(`../../models`)
const Tag = require(`../../models`)

const tangledFurniture = [
    {
        furnitureName: `Barrel Table`,
        price: 3520,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,13,16,19],
        setId: 13
    },
    {
        furnitureName: `Bear Armchair`,
        price: 2400,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,14,16,18,19],
        setId: 13
    },
    {
        furnitureName: `Cozy Couch`,
        price: 3000,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,13,16,18],
        setId: 13
    },
    {
        furnitureName: `Day & Night Paintings`,
        price: 1275,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,18,19],
        setId: 13
    },
    {
        furnitureName: `Easel`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,18,19],
        setId: 13
    },
    {
        furnitureName: `Guitar`,
        price: 2400,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,18,19],
        setId: 13
    },
    {
        furnitureName: `Helmet Lamp`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,16,18,19],
        setId: 13
    },
    {
        furnitureName: `Homey Rug`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,13,16,19],
        setId: 13
    },
    {
        furnitureName: `Horned Tavern Fireplace`,
        price: 600,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,14,16,18],
        setId: 13
    },
    {
        furnitureName: `Lantern Garland`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,13,18],
        setId: 13
    },
    {
        furnitureName: `Lounge Pillows`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,13,16,18],
        setId: 13
    },
    {
        furnitureName: `Mother Gothel's Standing Mirror`,
        price: 16000,
        obtainedBy: "Village Project: Restoring the Sunstone (Mother Gothel Level 10)",
        
        tagId: [4,11,12,13],
        setId: 13
    },
    // needs pricing data
    {
        furnitureName: `Painting Table`,
        price: null,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,18,19],
        setId: 13
    },
    {
        furnitureName: `Plain Bed`,
        price: 4600,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,13],
        setId: 13
    },
    {
        furnitureName: `Provincial Window`,
        price: 3200,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,13,15,16],
        setId: 13
    },
    {
        furnitureName: `Pub Sign`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        
        tagId: [3,8,9,12,15,18],
        setId: 13
    },
    {
        furnitureName: `Rustic Chandelier`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,14,15,16],
        setId: 13
    },
    {
        furnitureName: `Simple Stool`,
        price: 1800,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,14,16,19],
        setId: 13
    },
    {
        furnitureName: `Spray-Painted Window`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,18,19],
        setId: 13
    }
]

module.exports=tangledFurniture