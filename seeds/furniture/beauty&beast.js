const Set = require(`../../models`)
const Tag = require(`../../models`)

// 41 pieces of furniture

const beatuyBeastFurniture = [
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     setId: 6
    // },

]

module.exports=beatuyBeastFurniture