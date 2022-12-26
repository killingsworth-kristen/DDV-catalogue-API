
// 25 pieces of furniture

const monstersIncFurniture = [
    {
        furnitureName: `Brainy Bed`,
        price: 9200,
        image: "https://dreamlightvalleywiki.com/images/thumb/0/0d/Brainy_Bed.png/175px-Brainy_Bed.png",
        style: ["Elegant","Traditional"],
        furnitureCategory: ["Bedroom","Beds"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Brick Fireplace`,
        price: 8000,
        image: "https://dreamlightvalleywiki.com/images/thumb/9/97/Brick_Fireplace.png/107px-Brick_Fireplace.png",
        style: ["Quirky","Traditional"],
        furnitureCategory: ["Living Room","Study","Decor"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0,
        updated: 1.1
    },
    {
        furnitureName: `Desk Chair`,
        price: 4800,
        image: "https://dreamlightvalleywiki.com/images/thumb/a/ac/Desk_Chair.png/138px-Desk_Chair.png",
        style: ["Elegant","Traditional"],
        furnitureCategory: ["Bedroom","Study","Seating"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Door`,
        // price data not available
        image: "https://dreamlightvalleywiki.com/images/thumb/3/36/Door.png/126px-Door.png",
        style: ["Quirky"],
        furnitureCategory: ["Living Room","Doors"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Dorm Window`,
        price: 3200,
        image: "https://dreamlightvalleywiki.com/images/thumb/5/55/Dorm_Window.png/117px-Dorm_Window.png",
        style: ["Elegant","Traditional"],
        furnitureCategory: ["Bedroom","Study","Windows"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Freak Lamp`,
        price: 2040,
        image: "https://dreamlightvalleywiki.com/images/thumb/2/2d/Freak_Lamp.png/85px-Freak_Lamp.png",
        style: ["Quirky","Rustic"],
        furnitureCategory: ["Bedroom","Living Room","Study","Lighting"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Funky Storage`,
        price: 3200,
        image: "https://dreamlightvalleywiki.com/images/thumb/a/ac/Funky_Storage.png/105px-Funky_Storage.png",
        style: ["Quirky","Rustic"],
        furnitureCategory: ["Bathroom","Bedroom","Storage"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Funky Toilet`,
        price: 3200,
        image: "https://dreamlightvalleywiki.com/images/thumb/f/f0/Funky_Toilet.png/79px-Funky_Toilet.png",
        style: ["Quirky","Rustic"],
        furnitureCategory: ["Bathroom","Decor"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Gold Plaque`,
        price: 5440,
        image: "https://dreamlightvalleywiki.com/images/thumb/5/57/Gold_Plaque.png/162px-Gold_Plaque.png",
        style: ["Elegant","Traditional"],
        furnitureCategory: ["Bedroom","Study","Decor"],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Golden-Eyed Coffee Table`,
        price: 7040,
        image: "https://dreamlightvalleywiki.com/images/8/8b/Golden-Eyed_Coffee_Table.png",
        style: ["Elegant","Traditional"],
        furnitureCategory: ["Bedroom","Living Room","Study", "Tables"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Industrial Tree Lamp`,
        price: 2720,
        image: "https://dreamlightvalleywiki.com/images/thumb/f/fb/Industrial_Tree_Lamp.png/45px-Industrial_Tree_Lamp.png",
        style: ["Modern","Quirky"],
        furnitureCategory: ["Bedroom","Living Room","Study","Lighting"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Leather Couch`,
        price: 6000,
        image: "https://dreamlightvalleywiki.com/images/thumb/c/c2/Leather_Couch.png/180px-Leather_Couch.png",
        style: ["Elegant","Traditional"],
        furnitureCategory: ["Bedroom","Living Room","Study","Seating"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Little Mikey Plush Toy`,
        price: 2400,
        image: "https://dreamlightvalleywiki.com/images/thumb/6/6b/Little_Mikey_Plush_Toy.png/119px-Little_Mikey_Plush_Toy.png",
        style: ["Cute","Quirky"],
        furnitureCategory: ["Bedroom","Living Room","Rec Room","Decor"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Mike's Short Seat`,
        price: 2400,
        image: "https://dreamlightvalleywiki.com/images/1/1e/Mike%27s_Short_Seat.png",
        style: ["Casual","Modern","Quirky"],
        furnitureCategory: ["Bedroom","Living Room","Rec Room","Seating"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Old Bath`,
        price: 8000,
        image: "https://dreamlightvalleywiki.com/images/thumb/7/73/Old_Bath.png/138px-Old_Bath.png",
        style: ["Quirky","Rustic"],
        furnitureCategory: ["Bathroom","Decor"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Old Funky Sink`,
        price: 6400,
        image: "https://dreamlightvalleywiki.com/images/thumb/c/c7/Old_Funky_Sink.png/180px-Old_Funky_Sink.png",
        style: ["Quirky","Rustic"],
        furnitureCategory: ["Bathroom","Kitchen","Decor"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Rectangles Mirror`,
        price: 2720,
        image: "https://dreamlightvalleywiki.com/images/thumb/6/66/Rectangles_Mirror.png/131px-Rectangles_Mirror.png",
        style: ["Quirky","Rustic"],
        furnitureCategory: ["Bathroom","Bedroom","Living Room","Decor"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Slithering Rug`,
        price: 4000,
        image: "https://dreamlightvalleywiki.com/images/thumb/c/ca/Slithering_Rug.png/180px-Slithering_Rug.png",
        style: ["Quirky"],
        furnitureCategory: ["Living Room","Rec Room","Study","Rugs"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Spooky Speaker`,
        price: 2800,
        image: "https://dreamlightvalleywiki.com/images/thumb/0/0e/Spooky_Speaker.png/132px-Spooky_Speaker.png",
        style: ["Cute","Quirky","Sporty"],
        furnitureCategory: ["Living Room","Rec Room","Decor"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0,
        updated: 1.1
    },
    {
        furnitureName: `Student Desk`,
        price: 3520,
        image: "https://dreamlightvalleywiki.com/images/thumb/1/1e/Student_Desk.png/167px-Student_Desk.png",
        style: ["Elegant","Traditional"],
        furnitureCategory: ["Bedroom","Study","Decor"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Studious Bookshelf`,
        price: 16000,
        image: "https://dreamlightvalleywiki.com/images/thumb/f/ff/Studious_Bookshelf.png/104px-Studious_Bookshelf.png",
        style: ["Elegant","Traditional"],
        furnitureCategory: ["Bedroom","Study","Decor"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Sulley's Comfort Chair`,
        price: 4800,
        image: "https://dreamlightvalleywiki.com/images/thumb/1/12/Sulley%27s_Comfy_Chair.png/180px-Sulley%27s_Comfy_Chair.png",
        style: ["Quirky"],
        furnitureCategory: ["Living Room","Rec Room","Study","Seating"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Two-Headed Desk Lamp`,
        price: 765,
        image: "https://dreamlightvalleywiki.com/images/thumb/1/1c/Two-Headed_Desk_Lamp.png/104px-Two-Headed_Desk_Lamp.png",
        style: ["Cute","Quirky"],
        furnitureCategory: ["Bedroom","Living Room","Rec Room","Study","Lighting"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Venus Trap`,
        price: 2160,
        image: "https://dreamlightvalleywiki.com/images/3/3e/Venus_Trap.png",
        style: ["Quirky","Rustic"],
        furnitureCategory: ["Living Room","Outdoors","Decor"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0
    },
    {
        furnitureName: `Vintage Television`,
        price: 2880,
        image: "https://dreamlightvalleywiki.com/images/thumb/6/60/Vintage_Television.png/122px-Vintage_Television.png",
        style: ["Modern","Quirky"],
        furnitureCategory: ["Living Room","Rec Room","Decor"],
        color: [],
        universe: "Monsters Inc",
        added: 1.0,
        updated: 1.1
    },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     image: "",
    //     style: [],
    //     furnitureCategory: [""],
    //     color: [],
    //     universe: "Monsters Inc",
    //     added: 1.3
    // },
]

module.exports=monstersIncFurniture