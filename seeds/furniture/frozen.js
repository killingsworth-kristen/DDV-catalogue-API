
// 50 pieces of furniture as of 1/30/23

const frozenFurniture = [
    {
        furnitureName: `"Spring Reborn" Vertical Tapestry`,
        price: 2720,
        image: `/images/furniture/frozen/_Spring_Reborn__Vertical_Tapestry.png`,
        style: ["Rustic","Traditional"],
        furnitureCategory: ["Living Room","Rec Room","Study","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Anna Statue`,
        // price: 1,
        image: "images/furniture/frozen/Anna_Statue.png",
        obtainedBy: "Frozen Memories (Kristoff Level 3)",
        tracked: false,
        style: ["Elegant"],
        furnitureCategory: ["Outdoors","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Anna's Picnic Set`,
        price: 8000,
        image: "images/furniture/frozen/Anna's_Picnic_Set.png",
        style: ["Traditional","Rustic","Casual"],
        furnitureCategory: ["Outdoors","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Banner`,
        price: 3200,
        image: "images/furniture/frozen/Banner.png",
        obtainedBy: "Anna Friendship Level 8",
        style: ["Traditional","Elegant"],
        furnitureCategory: ["Dining Room","Living Room","Study","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Birch L-shaped Bench`,
        price: 3600,
        image: "images/furniture/frozen/Birch_L-shaped_Bench.png",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Rec Room","Bathroom","Seating"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Birch Toiletry Basket`,
        price: 1200,
        image: "images/furniture/frozen/Birch_Toiletry_Basket.png",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Rec Room","Bathroom","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Birch Tub`,
        price: 20000,
        image: "images/furniture/frozen/Birch_Tub.png",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Rec Room","Bathroom","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Birch Water Bucket`,
        price: 360,
        image: "images/furniture/frozen/Birch_Water_Bucket.png",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Rec Room","Bathroom","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Blue Robe Hanger`,
        price: 6400,
        image: "images/furniture/frozen/Blue_Robe_Hanger.png",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Rec Room","Bathroom","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Blue Robe Shelf`,
        price: 6400,
        image: "images/furniture/frozen/Blue_Robe_Shelf.png",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Rec Room","Bathroom","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Bronze Hot Steam Rocks`,
        price: 3200,
        image: "images/furniture/frozen/Blue_Robe_Shelf.png",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Rec Room","Bathroom","Utilities"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Candle`,
        price: 306,
        image: "images/furniture/frozen/Candle.png",
        style: ["Rustic","Traditional"],
        furnitureCategory: ["Living Room","Study","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Chandelier`,
        price: 5440,
        image: "images/furniture/frozen/Chandelier.png",
        style: ["Traditional","Elegant"],
        furnitureCategory: ["Dining Room","Living Room","Lighting"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Chilled Chair`,
        price: 4800,
        image: "images/furniture/frozen/Chilled_Chair.png",
        style: ["Bold","Elegant"],
        furnitureCategory: ["Dining Room","Study","Seating"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Four-Poster Bed`,
        price: 3680,
        image: "images/furniture/frozen/Four-Poster_Bed.png",
        obtainedBy: "Anna Friendship Level 5",
        style: ["Traditional","Elegant"],
        furnitureCategory: ["Bedroom","Beds"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Frost Chandelier`,
        price: 5440,
        image: "images/furniture/frozen/Frost_Chandelier.png",
        style: ["Bold","Elegant"],
        furnitureCategory: ["Bedroom","Dining Room","Living Room","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Frozen Portal`,
        price: 6400,
        image: "images/furniture/frozen/Frozen_Portal.png",
        style: ["Bold","Elegant"],
        furnitureCategory: ["Bedroom","Dining Room","Living Room","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Gallant Painting`,
        // price: ,
        image: "images/furniture/frozen/Gallant_Painting.png",
        style: ["Traditional","Elegant"],
        furnitureCategory: ["Dining Room","Living Room","Study","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.1
    },
    {
        furnitureName: `Gold Hot Steam Rocks`,
        price: 3200,
        image: "images/furniture/frozen/Gold_Hot_Steam_Rocks.png",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Bathroom","Rec Room","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Grandfather Clock`,
        price: 6400,
        image: "images/furniture/frozen/Grandfather_Clock.png",
        style: ["Traditional","Elegant"],
        furnitureCategory: ["Dining Room","Study","Living Room","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Green Window to the Mountains`,
        price: 20000,
        image: "images/furniture/frozen/Green_Window_to_the_Mountains.png",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Rec Room","Bathroom","Windows"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Hot Cocoa Stand`,
        price: 480,
        image: "images/furniture/frozen/Hot_Cocoa_Stand.png",
        obtainedBy:"Festive Star Path",
        style: ["Tradtional","Rustic"],
        furnitureCategory: ["Outdoors","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.2
    },
    {
        furnitureName: `Ice Castle Vertical Tapestry`,
        price: 2720,
        image: "images/furniture/frozen/Ice_Castle_Vertical_Tapestry.png",
        style: ["Rustic","Traditional"],
        furnitureCategory: ["Living Room","Rec Room","Study","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Ice Glazed Couch`,
        price: 6000,
        image: "images/furniture/frozen/Ice_Glazed_Couch.png",
        style: ["Bold","Elegant"],
        furnitureCategory: ["Bedroom","Living Room","Dining Room","Seating"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Ice Throne`,
        price: 210,
        image: "images/furniture/frozen/Ice_Throne.png",
        obtainedBy: "Elsa Friendship Level 8",
        style: ["Bold","Elegant"],
        furnitureCategory: ["Study","Rec Room","Outdoors","Seating"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Icicle Dining Table`,
        price: 4400,
        image: "images/furniture/frozen/Icicle_Dining_Table.png",
        style: ["Bold","Elegant"],
        furnitureCategory: ["Dining Room","Tables"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Icy Fountain`,
        price: 8000,
        image: "images/furniture/frozen/Icy_Fountain.png",
        style: ["Bold","Elegant"],
        furnitureCategory: ["Rec Room","Bathroom","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Icy Window`,
        price: 3200,
        image: "images/furniture/frozen/Icy_Window.png",
        style: ["Rustic","Traditional"],
        furnitureCategory: ["Kitchen","Dining Room","Living Room","Windows"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Kristoff's Sled`,
        price: 28000,
        image: "images/furniture/frozen/Kristoff's_Sled.png",
        obtainedBy: "A Broken Sled (Kristoff Level 10)",
        style: ["Traditional","Rustic"],
        furnitureCategory: ["Outdoors","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0,
        updated: 1.1
    },
    {
        furnitureName: `Library Side Table`,
        price: 1320,
        image: "images/furniture/frozen/Library_Side_Table.png",
        style: ["Rustic","Traditional"],
        furnitureCategory: ["Living Room","Study","Tables"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Long Dining Table`,
        price: 8800,
        image: "images/furniture/frozen/Long_Dining_Table.png",
        style: ["Traditional","Elegant"],
        furnitureCategory: ["Dining Room","Tables"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Miniature Snow Castle`,
        price: 2720,
        image: "images/furniture/frozen/Miniature_Snow_Castle.png",
        style: ["Elegant","Quirky"],
        furnitureCategory: ["Outdoors","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Norwegian Spruce L-shaped Bench`,
        price: 3600,
        image: "images/furniture/frozen/Norwegian_Spruce_L-shaped_Bench.png",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Rec Room","Bathroom","Seating"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Norwegian Spruce Robe Hanger`,
        price: 6400,
        image: "images/furniture/frozen/Norwegian_Spruce_Robe_Hanger.png",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Rec Room","Bathroom","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Norwegian Spruce Robe Shelf`,
        price: 6400,
        image: "images/furniture/frozen/Norwegian_Spruce_Robe_Shelf.png",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Rec Room","Bathroom","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Norwegian Spruce Toiletry Basket`,
        price: 1200,
        image: "images/furniture/frozen/Norwegian_Spruce_Toiletry_Basket.png",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Rec Room","Bathroom","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Norwegian Spruce Tub`,
        price: 20000,
        image: "images/furniture/frozen/Norwegian_Spruce_Tub.png",
        obtainedBy: "Kristoff Friendship Level 8",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Rec Room","Bathroom","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Norwegian Spruce Water Bucket`,
        price: 360,
        image: "images/furniture/frozen/Norwegian_Spruce_Water_Bucket.png",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Rec Room","Bathroom","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Norwegian Spruce Window to the Mountains`,
        price: 20000,
        image: "images/furniture/frozen/Norwegian_Spruce_Window_to_the_Mountains.png",
        style: ["Elegant","Rustic"],
        furnitureCategory: ["Rec Room","Bathroom","Windows"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Ornate Dining Chair`,
        price: 2400,
        image: "images/furniture/frozen/Ornate_Dining_Chair.png",
        style: ["Traditional","Elegant"],
        furnitureCategory: ["Dining Room","Seating"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Painted Double Door`,
        price: 3200,
        image: "images/furniture/frozen/Painted_Double_Door.png",
        obtainedBy: "Anna Friendship Level 2",
        style: ["Traditional","Elegant"],
        furnitureCategory: ["Dining Room","Bedroom","Study","Living Room", "Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Pillar`,
        price: 3200,
        image: "images/furniture/frozen/Pillar.png",
        style: ["Bold","Elegant"],
        furnitureCategory: ["Dining Room","Living Room","Outdoors"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Royal Bookshelf with Bell`,
        price: 6400,
        image: "images/furniture/frozen/Royal_Bookshelf_with_Bell.png",
        style: ["Rustic","Traditional"],
        furnitureCategory: ["Study","Rec Room","Living Room","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Royal Bookshelf with Greenery`,
        price: 6400,
        image: "images/furniture/frozen/Royal_Bookshelf_with_Greenery.png",
        style: ["Rustic","Traditional"],
        furnitureCategory: ["Study","Rec Room","Living Room","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Snowflake Bed`,
        price: 9200,
        image: "images/furniture/frozen/Snowflake_Bed.png",
        style: ["Bold","Elegant"],
        furnitureCategory: ["Bedroom","Beds"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Swing Painting`,
        price: 3400,
        image: "images/furniture/frozen/Swing_Painting.png",
        style: ["Traditional","Elegant"],
        furnitureCategory: ["Dining Room","Living Room","Study","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Triangular Stained Glass Window`,
        price: 8000,
        image: "images/furniture/frozen/Triangular_Stained_Glass_Window.png",
        style: ["Traditional","Elegant"],
        furnitureCategory: ["Dining Room","Bathroom","Kitchen","Living Room","Windows"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Vintage Phonograph`,
        price: 6400,
        image: "images/furniture/frozen/Vintage_Phonograph.png",
        style: ["Rustic","Traditional"],
        furnitureCategory: ["Living Room","Rec Room","Study","Decor"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Wine-Colored Loveseat`,
        price: 2400,
        image: "images/furniture/frozen/Wine-Colored_Loveseat.png",
        obtainedBy: "Furniture pouch",
        style: ["Traditional","Rustic"],
        furnitureCategory: ["Rec Room","Study","Bedroom","Seating"],
        color: [],
        universe:"Frozen",
        added: 1.0
    },
    {
        furnitureName: `Yule Goat`,
        image: "images/furniture/frozen/Yule_Goat.png",
        obtainedBy: "crafting",
        style: [],
        furnitureCategory: ["Decor"],
        color: [],
        universe:"Frozen",
        added: 1.2
    },
    {
        furnitureName: ``,
        image: "images/furniture/frozen/",
        obtainedBy: "",
        style: [],
        furnitureCategory: [""],
        color: [],
        universe:"Frozen",
        added: 1.3
    }
]

module.exports=frozenFurniture