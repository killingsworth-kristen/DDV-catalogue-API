
const Set = require(`../../models`)
const Tag = require(`../../models`)

// 20 items

const fencesPavingCrafting = [
    {
        craftingName: `Asphalt`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`sand`,`pebbles`,`coal`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Brick Road`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`x2 Stone`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Dark Wire Mesh Fence`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`x2 Iron Ingot`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Dark Wood Fence`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`x5 Dark Wood`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Gem & Opal Road`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`Aquamarine`,`Tourmaline`,`Alexandrite`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Gold & Opal Road`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`Stone`,`Gold Ingot`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Golden Brick Road`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`Gold Ingot`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Green Bamboo Fence`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`x5 Softwood`,`x5 Fiber`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Iron Spike and Brick Fence`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`x2 Iron Ingot`,`x3 Brick`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Leaf-Strewn Path`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`Hardwood`,`Soil`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Loose Gravel Path`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`Soil`,`Pebbles`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Metal Spike Fence`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`x2 Brick`, `x3 Iron Ingot`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Muddy Path`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`Soil`,`Hardwood`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Natural Rock Path`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`Pebbles`,`Sand`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Sinister Brick Road`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`Stone`,`Soil`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Snowy Brick Road`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`Stone`,`Snowball`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Sun-Baked Earthen Road`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`Soil`,`Clay`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `White Bamboo Fence`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`x5 Softwood`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `White Picket Fence`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`x5 Softwood`],
        tagId: [],
        setId: 28
    },
    {
        craftingName: `Wire Mesh Fence`,
        price: null,
        obtainedBy: "Collecting all necessary crafting materials",
        craftingMaterials: [`x2 Iron Ingots`],
        tagId: [],
        setId: 28
    },
   
]

module.exports=fencesPavingCrafting