const Set = require(`../../models`)
const Tag = require(`../../models`)

// 41 pieces of furniture

const beatuyBeastFurniture = [
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 7
    // },

]

module.exports=beatuyBeastFurniture