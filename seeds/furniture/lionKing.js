const Set = require(`../../models`)
const Tag = require(`../../models`)

// 23 pieces of furniture

const lionKingFurniture = [
    // no information yet
    // {
    //     furnitureName: `Branch Partition`,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 10
    // },
    {
        furnitureName: `Carved Wood Bed`,
        price: 23000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,9,13],
        setId: 10
    },
    {
        furnitureName: `Carved Wood Bench`,
        price: 2400,
        obtainedBy: "Scrooge's Store",
        tagId: [1,9,11,14,17,18],
        setId: 10
    },
    {
        furnitureName: `Carved Wood Table`,
        price: 8800,
        obtainedBy: "Scrooge's Store",
        tagId: [1,9,11,14,17],
        setId: 10
    },
    {
        furnitureName: `Carved Wooden Side Table`,
        price: 3520,
        obtainedBy: "Scrooge's Store",
        tagId: [1,9,11,14,19],
        setId: 10
    },
    {
        furnitureName: `Carved Wooden Sofa`,
        price: 6000,
        obtainedBy: "Scrooge's Store",
        tagId: [1,9,11,13,16],
        setId: 10
    },
    {
        furnitureName: `Clay Vase`,
        price: 2040,
        obtainedBy: "Scrooge's Store",
        tagId: [1,9,11],
        setId: 10
    },
    {
        furnitureName: `Fallen Log Perch`,
        price: 3000,
        obtainedBy: "Scrooge's Store",
        tagId: [9,17],
        setId: 10
    },
    {
        furnitureName: `Floral Mirror`,
        price: 5440,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,9,12,13],
        setId: 10
    },
    {
        furnitureName: `Giraffe Lamp`,
        price: 5440,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,9,13,16],
        setId: 10
    },
    {
        furnitureName: `Leaf Pile Rug`,
        price: 600,
        obtainedBy: "Scrooge's Store",
        tagId: [9,17],
        setId: 10
    },
    {
        furnitureName: `Lion Wall Sculpture`,
        price: 20400,
        obtainedBy: "Scar Friendship Level 5",
        tagId: [],
        setId: 10
    },
    {
        furnitureName: `Nightstand`,
        price: 3520,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,9,13,16],
        setId: 10
    },
    {
        furnitureName: `Paw Print Rock Slab`,
        price: 13600,
        obtainedBy: "Scar Friendship Level 8",
        tagId: [1,8,9,13,16,17,18],
        setId: 10
    },
    {
        furnitureName: `Rafiki's Bowl`,
        price: 900,
        obtainedBy: "Scrooge's Store",
        tagId: [9,12,15,17],
        setId: 10
    },
    {
        furnitureName: `Scar's Lounging Rock`,
        price: 4600,
        obtainedBy: "Scrooge's Store",
        tagId: [9,17],
        setId: 10
    },
    {
        furnitureName: `Sun-Emblazoned Dresser`,
        price: 6400,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,9,13,16],
        setId: 10
    },
    {
        furnitureName: `Trunk Column`,
        price: 6400,
        obtainedBy: "Scrooge's Store",
        tagId: [1,4,9,13,16],
        setId: 10
    },
    {
        furnitureName: `Vine Wall`,
        price: 5760,
        obtainedBy: "Furniture Pouch",
        tagId: [9,17],
        setId: 10
    },
    {
        furnitureName: `Volcanic Stove`,
        price: null,
        obtainedBy: "The Making of a Monarch (Scar Level 10)",
        tagId: [1,9,17],
        setId: 10
    },
    {
        furnitureName: `Waterfall`,
        price: 8000,
        obtainedBy: "Scrooge's Store",
        tagId: [9,17],
        setId: 10
    },
    {
        furnitureName: `Watering Hole`,
        price: 20000,
        obtainedBy: "Scrooge's Store",
        tagId: [9,17],
        setId: 10
    },
    {
        furnitureName: `Wildebeest Remains`,
        price: 16000,
        obtainedBy: "Scar Friendship Level 2",
        tagId: [1,9,17],
        setId: 10
    }
]

module.exports=lionKingFurniture