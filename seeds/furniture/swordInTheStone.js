const fs = require('fs')

const SwordStoneFurniture =[
    {
        furnitureName: `Bag of Tricks`,
        price: 3200,
        image: "https://dreamlightvalleywiki.com/images/thumb/e/e4/Bag_of_Tricks.png/180px-Bag_of_Tricks.png",
        obtainedBy: "Merlin Friendship Level 2",
        style: ["Quirky","Traditional"],
        furnitureCategory: ["Study"],
        color: [],
        universe: "The Sword and the Stone",
        added: 1.0
    },
    {
        furnitureName: `Big Pile of Books`,
        price: 6400,
        image: "https://dreamlightvalleywiki.com/images/thumb/0/00/Big_Pile_of_Books.png/134px-Big_Pile_of_Books.png",
        tracked: false,
        style: ["Quirky","Traditional","Simple","Playful","Delicate","Wondrous"],
        furnitureCategory: ["Study"],
        color: [],
        universe: "The Sword and the Stone",
        added: 1.0
    },
    {
        furnitureName: `Book Pile`,
        price: 900,
        image: "https://dreamlightvalleywiki.com/images/thumb/e/e6/Book_Pile.png/180px-Book_Pile.png",
        style: ["Professional","Traditional"],
        furnitureCategory: ["Bedroom","Study"],
        color: [],
        universe: "The Sword and the Stone",
        added: 1.0
    },
    {
        furnitureName: `Book Piles`,
        price: 3200,
        image: "https://dreamlightvalleywiki.com/images/2/2f/Book_Piles.png",
        tracked: false,
        style: ["Quirky","Traditional"],
        furnitureCategory: ["Study"],
        color: [],
        universe: "The Sword and the Stone",
        added: 1.0
    },
    {
        furnitureName: `Line of Books`,
        price: 480,
        image: "https://dreamlightvalleywiki.com/images/thumb/5/58/Line_of_Books.png/180px-Line_of_Books.png",
        style: [],
        furnitureCategory: ["Decor"],
        color: [],
        universe: "The Sword and the Stone",
        added: 1.0
    },
    {
        furnitureName: `Melted Candles`,
        price: 360,
        image: "https://dreamlightvalleywiki.com/images/thumb/3/34/Melted_Candles.png/165px-Melted_Candles.png",
        style: ["Professional","Traditional"],
        furnitureCategory: ["Bedroom","Study"],
        color: [],
        universe: "The Sword and the Stone",
        added: 1.0,
        update: 1.1
    },
    {
        furnitureName: `Mortar 'n' Pestle`,
        price: 360,
        image: "https://dreamlightvalleywiki.com/images/0/01/Mortar_%27n%27_Pestle.png",
        style: ["Professional","Quirky","Rustic"],
        furnitureCategory: ["Study"],
        color: [],
        universe: "The Sword and the Stone",
        added: 1.0
    },
    {
        furnitureName: `Old Armchair`,
        price: 900,
        image: "https://dreamlightvalleywiki.com/images/thumb/a/a5/Old_Armchair.png/180px-Old_Armchair.png",
        tracked: false,
        style: ["Casual","Quirky"],
        furnitureCategory: ["Living Room","Rec Room","Study"],
        color: [],
        universe: "The Sword and the Stone",
        added: 1.0
    },
    {
        furnitureName: `Open Book`,
        price: 1200,
        image: "https://dreamlightvalleywiki.com/images/thumb/5/59/Open_Book.png/180px-Open_Book.png",
        style: ["Professional","Traditional"],
        furnitureCategory: ["Bedroom","Study"],
        color: [],
        universe: "The Sword and the Stone",
        added: 1.0
    },
    {
        furnitureName: `Orntate Curtain`,
        price: 1200,
        image: "https://dreamlightvalleywiki.com/images/thumb/c/c1/Ornate_Curtain.png/88px-Ornate_Curtain.png",
        style: [],
        furnitureCategory: ["Living Room","Study"],
        color: [],
        universe: "The Sword and the Stone",
        added: 1.0
    },
    {
        furnitureName: `Phial Holder`,
        price: 1200,
        image: "https://dreamlightvalleywiki.com/images/thumb/2/22/Phial_Holder.png/180px-Phial_Holder.png",
        obtainedBy: "Merlin Friendship Level 5",
        style: ["Professional","Quirky","Traditional"],
        furnitureCategory: ["Rec Room","Study"],
        color: [],
        universe: "The Sword and the Stone",
        added: 1.0
    },
    {
        furnitureName: `Potion Cupboard`,
        price: 6400,
        image: "https://dreamlightvalleywiki.com/images/thumb/3/32/Potion_Cupboard.png/180px-Potion_Cupboard.png",
        obtainedBy: "Merlin Friendship Level 8",
        style: ["Quirky","Rustic","Traditional"],
        furnitureCategory: ["Rec Room","Study"],
        color: [],
        universe: "The Sword and the Stone",
        added: 1.0
    },
    {
        furnitureName: `Round-Bottomed Flask and Holder`,
        price: 900,
        image: "https://dreamlightvalleywiki.com/images/thumb/9/9c/Round-Bottomed_Flask_and_Holder.png/180px-Round-Bottomed_Flask_and_Holder.png",
        style: ["Professional","Quirky"],
        furnitureCategory: ["Rec Room","Study"],
        color: [],
        universe: "The Sword and the Stone",
        added: 1.0
    },
    {
        furnitureName: `Small Book Pile`,
        price: 360,
        image: "https://dreamlightvalleywiki.com/images/thumb/2/26/Small_Book_Pile.png/180px-Small_Book_Pile.png",
        style: ["Professional","Traditional"],
        furnitureCategory: ["Bedroom","Study"],
        color: [],
        universe: "The Sword and the Stone",
        added: 1.0
    },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     image: "",
    //     style: [],
    //     furnitureCategory: [""],
    //     color: [],
    //     universe: "The Sword and the Stone",
    //     added: 1.3
    // }
]

module.exports=SwordStoneFurniture