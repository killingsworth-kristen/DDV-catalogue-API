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
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 5
    // },
]

module.exports=ratatouilleFurniture