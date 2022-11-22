const Set = require(`../../models`)
const Tag = require(`../../models`)

// 27 items

const lionKingClothing = [
    {
        clothingName: `Black and Gold Claw Shoes`,
        price: 10000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,8,33],
        setId: 10
    },
    {
        clothingName: `Black and Gray Claw Shoes`,
        price: 10000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,8,33],
        setId: 10
    },
    {
        clothingName: `Black Claw-Tipped Gloves`,
        price: 20000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,27],
        setId: 10
    },
    {
        clothingName: `Blue Baby-Simba Crop Top`,
        price: 2400,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,36],
        setId: 10
    },
    {
        clothingName: `Blue Earrings`,
        price: 3800,
        obtainedBy: "Scrooge's Store",
        tagId: [1,2,11,25],
        setId: 10
    },
    {
        clothingName: `Blue Silk Shirt`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        tagId: [4,8,36],
        setId: 10
    },
    {
        clothingName: `Blue Sunrise Bracelet`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,6,21],
        setId: 10
    },
    {
        clothingName: `Brown Claw-Tipped Gloves`,
        price: 20000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,27],
        setId: 10
    },
    {
        clothingName: `Brown Faux-Fur-Trimmed Jacket`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,22],
        setId: 10
    },
    {
        clothingName: `Classy Blue Dress Shoes`,
        price: 4000,
        obtainedBy: "Scrooge's Store",
        tagId: [4,6,7,33],
        setId: 10
    },{
        clothingName: `Classy Purple Dress Shoes`,
        price: 4000,
        obtainedBy: "Scrooge's Store",
        tagId: [4,6,7,33],
        setId: 10
    },
    {
        clothingName: `Gold and Purple Watch`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        tagId: [21],
        setId: 10
    },
    {
        clothingName: `Gray Claw Top`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,22],
        setId: 10
    },
    {
        clothingName: `Green Claw Top`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,22],
        setId: 10
    },
    {
        clothingName: `Orange "Time Flies" Shirt`,
        price: 360,
        obtainedBy: "Scrooge's Store",
        tagId: [6,36],
        setId: 10
    },
    {
        clothingName: `Orange Earrings`,
        price: 3800,
        obtainedBy: "Scrooge's Store",
        tagId: [1,2,11,25],
        setId: 10
    },
    {
        clothingName: `Orange Sunrise Bracelet`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,6,21],
        setId: 10
    },
    {
        clothingName: `Purple and Gray Silk Shirt`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        tagId: [4,8,36],
        setId: 10
    },
    {
        clothingName: `Purple Baby-Simba Crop Top`,
        price: 2400,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,36],
        setId: 10
    },
    {
        clothingName: `Purple Silk Shirt`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        tagId: [4,8,36],
        setId: 10
    },
    {
        clothingName: `Red Faux-Fur-Trimmed Jacket`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,22],
        setId: 10
    },
    {
        clothingName: `Red Headwrap`,
        price: 2000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,6,29],
        setId: 10
    },
    {
        clothingName: `Silver and Purple Watch`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        tagId: [21],
        setId: 10
    },
    {
        clothingName: `Tan Sunny Slacks`,
        price: 2600,
        obtainedBy: "Scrooge's Store",
        tagId: [6,7,32],
        setId: 10
    },
    {
        clothingName: `White Sunny Slacks`,
        price: 2600,
        obtainedBy: "Scrooge's Store",
        tagId: [6,7,32],
        setId: 10
    },
    {
        clothingName: `Yellow "Time Flies" Shirt`,
        price: 360,
        obtainedBy: "Scrooge's Store",
        tagId: [6,36],
        setId: 10
    },
    {
        clothingName: `Yellow Headwrap`,
        price: 2000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,6,29],
        setId: 10
    },
]

module.exports=lionKingClothing