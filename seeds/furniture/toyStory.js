
// 26 pieces of furniture
// 5-6 furniture added for christams update dec. 6th 2022

const toyStoryFurniture = [
    {
        furnitureName: `"Hat's Off" Lamp`,
        price: 4080,
        image: "https://dreamlightvalleywiki.com/images/thumb/8/86/%22Hats_Off%22_Lamp.png/108px-%22Hats_Off%22_Lamp.png",
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
        image: "https://dreamlightvalleywiki.com/images/thumb/d/d2/%22Show_Your_Strength%22_Test.png/88px-%22Show_Your_Strength%22_Test.png",
        style: [],
        furnitureCategory: ["Decor"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Alien Guessing Booth`,
        price: 6400,
        image: "https://dreamlightvalleywiki.com/images/thumb/5/58/Alien_Guessing_Booth.png/120px-Alien_Guessing_Booth.png",
        style: ["Futuristic","Quirky"],
        furnitureCategory: ["Rec Room"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Arched Window into Deep Space`,
        price: 9600,
        image: "https://dreamlightvalleywiki.com/images/thumb/d/db/Arched_Window_to_Deep_Space.png/180px-Arched_Window_to_Deep_Space.png",
        obtainedBy: "Buzz Lightyear Friendship Level 8",
        style: ["Bold","Modern","Quirky"],
        furnitureCategory: ["Living Room","Bedroom","Study","Windows"],
        color: [],
        universe: "Toy Story",
        added: 1.2
    },
    {
        furnitureName: `Blanket Fort`,
        price: 8000,
        image: "https://dreamlightvalleywiki.com/images/thumb/5/52/Blanket_Fort.png/180px-Blanket_Fort.png",
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
        image: "https://dreamlightvalleywiki.com/images/thumb/9/9e/Chest_Coffee_Table.png/180px-Chest_Coffee_Table.png",
        style: ["Quirky","Rustic"],
        furnitureCategory: ["Living Room","Rec Room","Tables"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Cloudy Island`,
        price: 3520,
        image: "https://dreamlightvalleywiki.com/images/thumb/0/08/Cloudy_Island.png/180px-Cloudy_Island.png",
        style: ["Cute"],
        furnitureCategory: ["Rec Room","Study","Decor"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Cloudy Lamp`,
        price: 2720,
        image: "https://dreamlightvalleywiki.com/images/thumb/b/bf/Cloudy_Lamp.png/69px-Cloudy_Lamp.png",
        style: ["Casual","Cute"],
        furnitureCategory: ["Bedroom","Rec Room","Study","Lighting"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Coffee Cart`,
        price: 7040,
        image: "https://dreamlightvalleywiki.com/images/thumb/1/1e/Coffee_Cart.png/180px-Coffee_Cart.png",
        style: ["Casual","Cute"],
        furnitureCategory: ["Living Room","Study","Decor"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Colorful L Couch`,
        price: 6000,
        image: "https://dreamlightvalleywiki.com/images/thumb/3/31/Colorful_L_Couch.png/180px-Colorful_L_Couch.png",
        obtainedBy: "Founder's Pack: Deluxe Edition",
        style: [],
        furnitureCategory: ["Seating"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Entertainment System`,
        price: 7200,
        image: "https://dreamlightvalleywiki.com/images/thumb/3/38/Entertainment_System.png/180px-Entertainment_System.png",
        obtainedBy: "Founder's Pack: Deluxe Edition",
        style: [],
        furnitureCategory: ["Decor"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Galaxy Table`,
        // price: ,
        image: "https://dreamlightvalleywiki.com/images/thumb/b/ba/Galaxy_Table.png/180px-Galaxy_Table.png",
        style: [],
        furnitureCategory: ["Tables"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Geometric Side Table`,
        price: 880,
        image: "https://dreamlightvalleywiki.com/images/thumb/2/2e/Geometric_Side_Table.png/180px-Geometric_Side_Table.png",
        style: ["Modern","Quirky","Sporty"],
        furnitureCategory: ["Bedroom","Living Room","Tables"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Graphic Sofa`,
        price: 3000,
        image: "https://dreamlightvalleywiki.com/images/thumb/4/4b/Graphic_Sofa.png/180px-Graphic_Sofa.png",
        obtainedBy: "Founder's Pack: Deluxe Edition",
        style: [],
        furnitureCategory: ["Seating"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Half-Arch Window Left`,
        price: 8000,
        image: "https://dreamlightvalleywiki.com/images/thumb/d/d7/Half-Arch_Window_-_Left.png/180px-Half-Arch_Window_-_Left.png",
        obtainedBy: "Founder's Pack: Deluxe Edition",
        style: [],
        furnitureCategory: ["Decor"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Half-Arch Window Right`,
        price: 8000,
        image: "https://dreamlightvalleywiki.com/images/thumb/3/34/Half-Arch_Window_-_Right.png/180px-Half-Arch_Window_-_Right.png",
        obtainedBy: "Founder's Pack: Deluxe Edition",
        style: [],
        furnitureCategory: ["Decor"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Half-Cup Chair`,
        price: 4800,
        image: "https://dreamlightvalleywiki.com/images/thumb/7/74/Half-Cup_Chair.png/180px-Half-Cup_Chair.png",
        style: ["Cute","Quirky"],
        furnitureCategory: ["Living Room","Rec Room"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Hydrangea Bundle`,
        price: 5760,
        image: "https://dreamlightvalleywiki.com/images/0/04/Hydrangea_Bundle.png",
        style: ["Casual","Cute"],
        furnitureCategory: ["Bedroom","Dining Room","Living Room"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Lively Coffee Table`,
        price: 3520,
        image: "https://dreamlightvalleywiki.com/images/thumb/9/99/Lively_Coffee_Table.png/180px-Lively_Coffee_Table.png",
        obtainedBy: "Founder's Pack: Deluxe Edition",
        style: [],
        furnitureCategory: ["Tables"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Photo Booth`,
        price: 6400,
        image: "https://dreamlightvalleywiki.com/images/thumb/c/c7/Photo_Booth.png/126px-Photo_Booth.png",
        style: ["Modern","Quirky"],
        furnitureCategory: ["Outdoors","Rec Room"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Pixar Ball`,
        // price: ,
        image: "https://dreamlightvalleywiki.com/images/thumb/6/69/Pixar_Ball.png/179px-Pixar_Ball.png",
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
        image: "https://dreamlightvalleywiki.com/images/thumb/1/11/Popcorn_Machine.png/97px-Popcorn_Machine.png",
        style: ["Quirky","Traditional"],
        furnitureCategory: ["Kitchen","Outdoors","Rec Room"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Red Drapery`,
        price: 1200,
        image: "https://dreamlightvalleywiki.com/images/thumb/d/d1/Red_Drapery.png/180px-Red_Drapery.png",
        style: ["Quirky","Traitional"],
        furnitureCategory: ["Bedroom","Rec Room"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Rocket Painting`,
        price: 2720,
        image: "https://dreamlightvalleywiki.com/images/thumb/a/a0/Rocket_Painting.png/146px-Rocket_Painting.png",
        style: ["Cute","Casual"],
        furnitureCategory: ["Bedroom","Rec Room","Study"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Stage Curtain Left`,
        price: 1200,
        image: "https://dreamlightvalleywiki.com/images/thumb/a/a3/Stage_Curtain_-_Left.png/60px-Stage_Curtain_-_Left.png",
        style: ["Quirky","Traditional"],
        furnitureCategory: ["Bedroom","Rec Room"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Stage Curtain Right`,
        price: 1200,
        image: "https://dreamlightvalleywiki.com/images/thumb/d/d5/Stage_Curtain_-_Right.png/59px-Stage_Curtain_-_Right.png",
        style: ["Quirky","Traditional"],
        furnitureCategory: ["Bedroom","Rec Room"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Starry Chair`,
        price: 2400,
        image: "https://dreamlightvalleywiki.com/images/thumb/0/07/Starry_Chair.png/111px-Starry_Chair.png",
        style: ["Casual","Cute"],
        furnitureCategory: ["Rec Room","Study"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Starry Stool`,
        price: 1800,
        image: "https://dreamlightvalleywiki.com/images/thumb/2/25/Starry_Stool.png/180px-Starry_Stool.png",
        style: ["Casual","Cute"],
        furnitureCategory: ["Kitchen","Living Room","Study"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Star-Shaped Neon Decoration`,
        price: 2720,
        image: "https://dreamlightvalleywiki.com/images/thumb/9/97/Star-Shaped_Neon_Decoration.png/124px-Star-Shaped_Neon_Decoration.png",
        style: ["Cute","Quirky"],
        furnitureCategory: ["Bedroom","Living Room","Rec Room"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Step-Up Stool`,
        price: 2400,
        image: "https://dreamlightvalleywiki.com/images/b/bc/Step-Up_Stool.png",
        style: ["Cute","Quirky"],
        furnitureCategory: ["Outdoors","Rec Room"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Space Ranger Ship`,
        image: "https://dreamlightvalleywiki.com/images/0/0b/Space_Ranger_Ship.png",
        tracked: false,
        obtainedBy: "A Space Ranger Recruit (Buzz Lightyear Level 2)",
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
        image: "https://dreamlightvalleywiki.com/images/thumb/9/94/Vibrant_Wall_Planter.png/180px-Vibrant_Wall_Planter.png",
        obtainedBy: "Founder's Pack: Deluxe Edition",
        style: [],
        furnitureCategory: ["Decor"],
        color: [],
        universe: "Toy Story",
        added: 1.0
    },
    {
        furnitureName: `Writer Blocks Column`,
        price: 3200,
        image: "https://dreamlightvalleywiki.com/images/thumb/8/81/Writer_Blocks_Column.png/50px-Writer_Blocks_Column.png",
        obtainedBy: "Woody Friendship Level 5",
        style: ["Cute","Traditional","Quirky"],
        furnitureCategory: ["Study","Living Room","Decor"],
        color: [],
        universe: "Toy Story",
        added: 1.2
    },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     image: "",
    //     style: [],
    //     furnitureCategory: [""],
    //     color: [],
    //     universe: "Toy Story",
    //     added: 1.3
    // },
]

module.exports=toyStoryFurniture