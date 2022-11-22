const Set = require(`../../models`)
const Tag = require(`../../models`)

// 29 items

const tangledClothing = [
    {
        clothingName: `Blue Adventurer Boots`,
        price: 2000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,9,33],
        setId: 13
    },
    {
        clothingName: `Blue Floral Jumpsuit`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,23],
        setId: 13
    },
    {
        clothingName: `Blue Floral Scarf`,
        price: 1350,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,31],
        setId: 13
    },
    {
        clothingName: `Brown Adventurer Boots`,
        price: 2000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,9,33],
        setId: 13
    },
    {
        clothingName: `Brown Artist's Satchel`,
        price: 900,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,20],
        setId: 13
    },
    {
        clothingName: `Crisp Blue Button-Up`,
        price: 2400,
        obtainedBy: "Scrooge's Store",
        tagId: [1,6,7,36],
        setId: 13
    },
    {
        clothingName: `Cripsp White Button-Up`,
        price: 2400,
        obtainedBy: "Scrooge's Store",
        tagId: [1,6,7,36],
        setId: 13
    },
    {
        clothingName: `Floral Braid`,
        price: 800,
        obtainedBy: "Scrooge's Store",
        tagId: [28],
        setId: 13
    },
    {
        clothingName: `Golden "Dagger of Betrayal" Earrings`,
        price: 7600,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,25],
        setId: 13
    },
    {
        clothingName: `Golden Dagger Sharp Nails`,
        price: null,
        obtainedBy: "Mother Gothel Friendship Level 8",
        tagId: [1,4,27],
        setId: 13
    },
    {
        clothingName: `Golden Tower Necklace`,
        price: null,
        obtainedBy: "Mother Gothel Friendship Level 2",
        tagId: [1,4,31],
        setId: 13
    },
    {
        clothingName: `Green Artist's Satchel`,
        price: 4400,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,20],
        setId: 13
    },
    {
        clothingName: `Green Floral Cardigan`,
        price: 4000,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,22],
        setId: 13
    },
    {
        clothingName: `Green Floral Jumpsuit`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,23],
        setId: 13
    },
    {
        clothingName: `Green Floral Scarf`,
        price: 1125,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,31],
        setId: 13
    },
    {
        clothingName: `Khaki Jodhpurs`,
        price: 13000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,8,11,32],
        setId: 13
    },
    {
        clothingName: `Long Curly Hair`,
        price: null,
        obtainedBy: "Mother Gothel Friendship Level 5",
        tagId: [28],
        setId: 13
    },
    {
        clothingName: `Pink & Purple Floral Cardigan`,
        price: 4000,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,22],
        setId: 13
    },
    {
        clothingName: `Purple Artist's Satchel`,
        price: 900,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,20],
        setId: 13
    },
    {
        clothingName: `Purple Floral Jumpsuit`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,23],
        setId: 13
    },
    {
        clothingName: `Purple Floral Scarf`,
        price: 1350,
        obtainedBy: "Scrooge's Store",
        tagId: [2,3,31],
        setId: 13
    },
    {
        clothingName: `Rapunzel's Summer Sundrop Gown`,
        price: 40000,
        obtainedBy: "Scrooge's Store",
        tagId: [3,4,24],
        setId: 13
    },
    {
        clothingName: `Sharp Heels`,
        price: 2000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,33],
        setId: 13
    },
    {
        clothingName: `Silver "Dagger of Betrayal" Earrings`,
        price: 7600,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,25],
        setId: 13
    },
    {
        clothingName: `Silver Dagger-Sharp Nails`,
        price: 4000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,27],
        setId: 13
    },
    // {
    //     clothingName: `Silver Tower Necklace`,
    //     price: null,
    //     obtainedBy: "unavailable",
    //     tagId: [1,4,31],
    //     setId: 13
    // },
    {
        clothingName: `Tan Jodhpurs`,
        price: 13000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,8,11,32],
        setId: 13
    },
    {
        clothingName: `Trusty Blue Satchel`,
        price: 2200,
        obtainedBy: "Scrooge's Store",
        tagId: [1,9,11,20],
        setId: 13
    },
    {
        clothingName: `Trusty Brown Satchel`,
        price: 2200,
        obtainedBy: "Scrooge's Store",
        tagId: [1,9,11,20],
        setId: 13
    },
]

module.exports=tangledClothing