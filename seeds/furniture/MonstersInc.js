const Set = require(`../../models`)
const Tag = require(`../../models`)

// 25 pieces of furniture

const monstersIncFurniture = [
    {
        furnitureName: `Brainy Bed`,
        price: 9200,
        obtainedBy: "Scrooge's Store",
        tagId: [4,11,13],
        setId: 14
    },
    {
        furnitureName: `Brick Fireplace`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        tagId: [8,11,16,19],
        setId: 14
    },
    {
        furnitureName: `Desk Chair`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        tagId: [4,11,13,19],
        setId: 14
    },
    // price data not available
    {
        furnitureName: `Door`,
        price: null,
        obtainedBy: "Scrooge's Store",
        tagId: [8,16],
        setId: 14
    },
    {
        furnitureName: `Dorm Window`,
        price: 3200,
        obtainedBy: "Scrooge's Store",
        tagId: [4,11,13,19],
        setId: 14
    },
    {
        furnitureName: `Freak Lamp`,
        price: 2040,
        obtainedBy: "Scrooge's Store",
        tagId: [8,9,13,16,19],
        setId: 14
    },
    {
        furnitureName: `Funky Storage`,
        price: 3200,
        obtainedBy: "Scrooge's Store",
        tagId: [8,9,12,13],
        setId: 14
    },
    {
        furnitureName: `Funky Toilet`,
        price: 3200,
        obtainedBy: "Scrooge's Store",
        tagId: [8,9,12],
        setId: 14
    },
    {
        furnitureName: `Gold Plaque`,
        price: 5440,
        obtainedBy: "Scrooge's Store",
        tagId: [4,11,13,19],
        setId: 14
    },
    {
        furnitureName: `Golden-Eyed Coffee Table`,
        price: 7040,
        obtainedBy: "Scrooge's Store",
        tagId: [4,11,13,16,19],
        setId: 14
    },
    {
        furnitureName: `Industrial Tree Lamp`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        tagId: [6,8,13,16,19],
        setId: 14
    },
    {
        furnitureName: `Leather Couch`,
        price: 6000,
        obtainedBy: "Scrooge's Store",
        tagId: [4,11,13,16,19],
        setId: 14
    },
    {
        furnitureName: `Little Mikey Plush Toy`,
        price: 2400,
        obtainedBy: "Scrooge's Store",
        tagId: [3,8,13,16,18],
        setId: 14
    },
    {
        furnitureName: `Mike's Short Seat`,
        price: 2400,
        obtainedBy: "Scrooge's Store",
        tagId: [2,6,8,13,16,18],
        setId: 14
    },
    {
        furnitureName: `Old Bath`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        tagId: [8,9,12],
        setId: 14
    },
    {
        furnitureName: `Old Funky Sink`,
        price: 6400,
        obtainedBy: "Scrooge's Store",
        tagId: [8,9,12,15],
        setId: 14
    },
    {
        furnitureName: `Rectangles Mirror`,
        price: 2720,
        obtainedBy: "Scrooge's Store",
        tagId: [8,9,12,13,16],
        setId: 14
    },
    {
        furnitureName: `Slithering Rug`,
        price: 4000,
        obtainedBy: "Scrooge's Store",
        tagId: [8,16,18,19],
        setId: 14
    },
    {
        furnitureName: `Spooky Speaker`,
        price: 2800,
        obtainedBy: "Scrooge's Store",
        tagId: [3,8,10,16,18],
        setId: 14
    },
    {
        furnitureName: `Student Desk`,
        price: 3520,
        obtainedBy: "Scrooge's Store",
        tagId: [4,11,13,19],
        setId: 14
    },
    {
        furnitureName: `Studious Bookshelf`,
        price: 16000,
        obtainedBy: "Scrooge's Store",
        tagId: [4,11,13,19],
        setId: 14
    },
    {
        furnitureName: `Sulley's Comfort Chair`,
        price: 4800,
        obtainedBy: "Scrooge's Store",
        tagId: [8,16,18,19],
        setId: 14
    },
    {
        furnitureName: `Two-Headed Desk Lamp`,
        price: 765,
        obtainedBy: "Scrooge's Store",
        tagId: [3,8,13,16,18,19],
        setId: 14
    },
    {
        furnitureName: `Venus Trap`,
        price: 2160,
        obtainedBy: "Scrooge's Store",
        tagId: [8,9,16,17],
        setId: 14
    },
    {
        furnitureName: `Vintage Television`,
        price: 2880,
        obtainedBy: "Scrooge's Store",
        tagId: [6,8,16,18],
        setId: 14
    },
]

module.exports=monstersIncFurniture