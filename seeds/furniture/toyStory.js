
// 26 pieces of furniture
// 5-6 furniture added for christams update dec. 6th 2022

const toyStoryFurniture = [
    {
        furnitureName: `"Hat's Off" Lamp`,
        price: 4080,
        obtainedBy: "Woody Friendship Level 8",
        style: ["Quirky","Rustic","Bold"],
        furnitureCategory: ["Living Room","Bedroom","Lighting"],
        color: [],
        universe: "Toy Story",
        added: 1.2
    },
    {
        furnitureName: `"Show Your Strength" Test`,
        price: 6400,
        style: [],
        furnitureCategory: ["Decor"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Alien Guessing Booth`,
        price: 6400,
        style: ["Futuristic","Quirky"],
        furnitureCategory: ["Rec Room"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Arched Window into Deep Space`,
        // price: ,
        obtainedBy: "Buzz Lightyear Friendship Level 8",
        style: [],
        furnitureCategory: ["Windows"],
        color: [],
        universe: "Toy Story",
        added: 1.2
    },
    {
        furnitureName: `Blanket Fort`,
        price: 8000,
        obtainedBy: "The Illumination (Woody Level 10)",
        style: ["Traditional","Quirky","Casual"],
        furnitureCategory: ["Outdoors","Living Room","Bedroom", "Decor"],
        craftingIngredients: ["x40 Softwood","x5 Cotton","X4 Fabirc","x4 Rope","x5 Glass"],
        color: [],
        universe: "Toy Story",
        added: 1.2
    },
    {
        furnitureName: `Chest Coffee Table`,
        price: 3520,
        style: ["Quirky","Rustic"],
        furnitureCategory: ["Living Room","Rec Room"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Cloudy Island`,
        price: 3520,
        style: ["Cute"],
        furnitureCategory: ["Rec Room","Study"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Cloudy Lamp`,
        price: 2720,
        style: ["Casual","Cute"],
        furnitureCategory: ["Bedroom","Rec Room","Study"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Coffee Cart`,
        price: 7040,
        style: ["Casual","Cute"],
        furnitureCategory: ["Living Room","Study"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Colorful L Couch`,
        price: 6000,
        obtainedBy: "Founder's Pack: Deluxe Edition",
        style: [],
        furnitureCategory: ["Seating"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Entertainment System`,
        price: 7200,
        obtainedBy: "Founder's Pack: Deluxe Edition",
        style: [],
        furnitureCategory: ["Decor"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Geometric Side Table`,
        price: 880,
        style: ["Modern","Quirky","Sporty"],
        furnitureCategory: ["Bedroom","Living Room"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Graphic Sofa`,
        price: 3000,
        obtainedBy: "Founder's Pack: Deluxe Edition",
        style: [],
        furnitureCategory: ["Seating"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Half-Arch Window Left`,
        price: 8000,
        obtainedBy: "Founder's Pack: Deluxe Edition",
        style: [],
        furnitureCategory: ["Decor"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Half-Arch Window Right`,
        price: 8000,
        obtainedBy: "Founder's Pack: Deluxe Edition",
        style: [],
        furnitureCategory: ["Decor"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Half-Cup Chair`,
        price: 4800,
        style: ["Cute","Quirky"],
        furnitureCategory: ["Living Room","Rec Room"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Hydrangea Bundle`,
        price: 5760,
        style: ["Casual","Cute"],
        furnitureCategory: ["Bedroom","Dining Room","Living Room"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Lively Coffee Table`,
        price: 3520,
        obtainedBy: "Founder's Pack: Deluxe Edition",
        style: [],
        furnitureCategory: ["Tables"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Photo Booth`,
        price: 6400,
        style: ["Modern","Quirky"],
        furnitureCategory: ["Outdoors","Rec Room"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Pixar Ball`,
        // price: ,
        obtainedBy: "Buzz Lightyear Friendship Level 5",
        style: [],
        furnitureCategory: ["Decor"],
        color: [],
        universe: "Toy Story",
        added: 1.2
    },
    {
        furnitureName: `Popcorn Machine`,
        price: 7360,
        style: ["Quirky","Traditional"],
        furnitureCategory: ["Kitchen","Outdoors","Rec Room"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Red Drapery`,
        price: 1200,
        style: ["Quirky","Traitional"],
        furnitureCategory: ["Bedroom","Rec Room"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Rocket Painting`,
        price: 2720,
        style: ["Cute","Casual"],
        furnitureCategory: ["Bedroom","Rec Room","Study"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Stage Curtain Left`,
        price: 1200,
        style: ["Quirky","Traditional"],
        furnitureCategory: ["Bedroom","Rec Room"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Stage Curtain Right`,
        price: 1200,
        style: ["Quirky","Traditional"],
        furnitureCategory: ["Bedroom","Rec Room"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Starry Chair`,
        price: 2400,
        style: ["Casual","Cute"],
        furnitureCategory: ["Rec Room","Study"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Starry Stool`,
        price: 1800,
        style: ["Casual","Cute"],
        furnitureCategory: ["Kitchen","Living Room","Study"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Star-Shaped Neon Decoration`,
        price: 2720,
        style: ["Cute","Quirky"],
        furnitureCategory: ["Bedroom","Living Room","Rec Room"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Step-Up Stool`,
        price: 2400,
        style: ["Cute","Quirky"],
        furnitureCategory: ["Outdoors","Rec Room"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Space Ranger Ship`,
        // price: ,
        obtainedBy: "A Space Ranger Recruit (Buzz Lightyear Level 10)",
        style: [],
        furnitureCategory: ["Decor"],
        craftingIngredients: ["x3 Glass","x10 Hardwood","x5 Iron Ingot"],
        color: [],
        universe: "Toy Story",
        added: 1.2
    },
    {
        furnitureName: `Vibrant Wall Planter`,
        price: 2800,
        obtainedBy: "Founder's Pack: Deluxe Edition",
        style: [],
        furnitureCategory: ["Decor"],
        color: [],
        universe: "Toy Story"
    },
    {
        furnitureName: `Writer Blocks Column`,
        price: 3200,
        obtainedBy: "Woody Friendship Level 5",
        style: ["Cute","Traditional","Quirky"],
        furnitureCategory: ["Study","Living Room","Decor"],
        color: [],
        universe: "Toy Story",
        added: 1.2
    },
]

module.exports=toyStoryFurniture