const Set = require(`../../models`)
const Tag = require(`../../models`)

// 34 pieces of furniture

const walleFurniture =[
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "WALL-E"
    // }
]

module.exports=walleFurniture