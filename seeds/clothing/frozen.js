const Set = require(`../../models`)
const Tag = require(`../../models`)

// 27 items

const frozenClothing = [
    {
        clothingName: `"Fall's Bounty" Gown`,
        price: null,
        obtainedBy: "Do You Want to Build a Snowman (Anna level 10",
        tagId: [4,9,11,24],
        setId: 12
    },
    {
        clothingName: `Arendelle Braided Updo`,
        price: 1600,
        obtainedBy: "Scrooge's Store",
        tagId: [28],
        setId: 12
    },
    {
        clothingName: `Black Winter Jacket`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        tagId: [6,10,22],
        setId: 12
    },
    {
        clothingName: `Blue "Frosty Finery" Evening Gloves`,
        price: null,
        obtainedBy: "Elsa Friendship Level 5",
        tagId: [4,27],
        setId: 12
    },
    {
        clothingName: `Blue Ice Shard Earrings`,
        price: 7600,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,25],
        setId: 12
    },
    {
        clothingName: `Blue Reindeer-Cinched Scarf`,
        price: 3000,
        obtainedBy: "Scrooge's Store",
        tagId: [4,8,11,31],
        setId: 12
    },
    {
        clothingName: `Cozy Blue Sweater`,
        price: null,
        obtainedBy: "Kristoff Friendship Level 2",
        tagId: [2,9,22],
        setId: 12
    },
    {
        clothingName: `Cozy Blue-Green Sweater`,
        price: 4000,
        obtainedBy: "Scrooge's Store",
        tagId: [2,9,22],
        setId: 12
    },
    {
        clothingName: `Cozy Orange Sweater`,
        price: 4000,
        obtainedBy: "Scrooge's Store",
        tagId: [2,9,22],
        setId: 12
    },
    {
        clothingName: `Dark Green Reindeer-Cinched Scarf`,
        price: 3000,
        obtainedBy: "Scrooge's Store",
        tagId: [4,8,11,31],
        setId: 12
    },
    {
        clothingName: `Elemental Blue Hoodie`,
        price: 1500,
        obtainedBy: "Scrooge's Store",
        tagId: [1,2,22],
        setId: 12
    },
    {
        clothingName: `Elemental Purple Hoodie`,
        price: 1500,
        obtainedBy: "Scrooge's Store",
        tagId: [1,2,22],
        setId: 12
    },
    {
        clothingName: `Fancy Black and Gold Boots`,
        price: 4000,
        obtainedBy: "Scrooge's Store",
        tagId: [4,11,33],
        setId: 12
    },
    {
        clothingName: `Fancy Black Boots`,
        price: 4000,
        obtainedBy: "Scrooge's Store",
        tagId: [4,11,33],
        setId: 12
    },
    {
        clothingName: `Fireproof GLoves`,
        price: null,
        obtainedBy: "The Spirits of Nature Quest",
        tagId: [2,3,27],
        setId: 12
    },
    {
        clothingName: `Frosted Hair`,
        price: null,
        obtainedBy: "Elsa Friendship Level 2",
        tagId: [28],
        setId: 12
    },
    {
        clothingName: `Gleaming Ice Gown`,
        price: null,
        obtainedBy: "The Ice Cavern Mystery (Elsa Level 10)",
        tagId: [4,24],
        setId: 12
    },
    {
        clothingName: `Gray Snow Gloves`,
        price: 4000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,6,9,27],
        setId: 12
    },
    {
        clothingName: `Hat Hair`,
        price: null,
        obtainedBy: "Kristoff Friendship Level 5",
        tagId: [28],
        setId: 12
    },
    {
        clothingName: `Pink and Blue "Frosty Finery" Evening GLoves`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        tagId: [4,27],
        setId: 12
    },
    {
        clothingName: `Purple Ice Shard Earrings`,
        price: 7600,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,25],
        setId: 12
    },
    {
        clothingName: `Purple Winter Jacket`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        tagId: [6,10,22],
        setId: 12
    },
    {
        clothingName: `Red Reindeer-Cinched Scarf`,
        price: 3000,
        obtainedBy: "Scrooge's Store",
        tagId: [4,8,11,31],
        setId: 12
    },
    {
        clothingName: `Red Snow Gloves`,
        price: 4000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,6,9,27],
        setId: 12
    },
    {
        clothingName: `Red Winter Jacket`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        tagId: [6,10,22],
        setId: 12
    },
    {
        clothingName: `Snow Boots`,
        price: 2000,
        obtainedBy: "Scrooge's Store",
        tagId: [2,6,10,33],
        setId: 12
    },
    {
        clothingName: `Sparkling Ice Gown`,
        price: 16000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,8,24],
        setId: 12
    },
]

module.exports=frozenClothing