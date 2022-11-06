const Set = require(`../../models`)
const Tag = require(`../../models`)

const tangledFurniture = [
    {
        furnitureName: `Barrel Table`,
        price: 3520,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,13,16,19],
        setId: 12
    },
    {
        furnitureName: `Bear Armchair`,
        price: 2400,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,14,16,18,19],
        setId: 12
    },
    {
        furnitureName: `Cozy Couch`,
        price: 3000,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,13,16,18],
        setId: 12
    },
    {
        furnitureName: `Day & Night Paintings`,
        price: 1275,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,18,19],
        setId: 12
    },
    {
        furnitureName: `Easel`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,18,19],
        setId: 12
    },
    {
        furnitureName: `Guitar`,
        price: 2400,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,18,19],
        setId: 12
    },
    {
        furnitureName: `Helmet Lamp`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,16,18,19],
        setId: 12
    },
    {
        furnitureName: `Homey Rug`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,13,16,19],
        setId: 12
    },
    {
        furnitureName: `Horned Tavern Fireplace`,
        price: 600,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,14,16,18],
        setId: 12
    },
    {
        furnitureName: `Lantern Garland`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,13,18],
        setId: 12
    },
    {
        furnitureName: `Lounge Pillows`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,13,16,18],
        setId: 12
    },
    {
        furnitureName: `Mother Gothel's Standing Mirror`,
        price: 16000,
        obtainedBy: "Village Project: Restoring the Sunstone (Mother Gothel Level 10)",
        
        tagId: [4,11,12,13],
        setId: 12
    },
    // needs pricing data
    {
        furnitureName: `Painting Table`,
        price: null,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,18,19],
        setId: 12
    },
    {
        furnitureName: `Plain Bed`,
        price: 4600,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,13],
        setId: 12
    },
    {
        furnitureName: `Provincial Window`,
        price: 3200,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,13,15,16],
        setId: 12
    },
    {
        furnitureName: `Pub Sign`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        
        tagId: [3,8,9,12,15,18],
        setId: 12
    },
    {
        furnitureName: `Rustic Chandelier`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,14,15,16],
        setId: 12
    },
    {
        furnitureName: `Simple Stool`,
        price: 1800,
        obtainedBy: "Scrooge's Store",
        
        tagId: [1,9,14,16,19],
        setId: 12
    },
    {
        furnitureName: `Spray-Painted Window`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        
        tagId: [2,3,8,18,19],
        setId: 12
    }
]

module.exports=tangledFurniture