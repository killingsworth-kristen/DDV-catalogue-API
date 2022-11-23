const Set = require(`../../models`)
const Tag = require(`../../models`)

// 31 pieces of furniture

const ratatouilleFurniture = [
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     universe: "Ratatouille"
    // },
]

module.exports=ratatouilleFurniture