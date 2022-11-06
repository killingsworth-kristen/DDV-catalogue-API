const Set = require(`../../models`)
const Tag = require(`../../models`)

// 72 pieces of furniture

const MickeyFurniture = [
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },

    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },

    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },

    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },

    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },

    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
     //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 1
    // }
]

module.exports=MickeyFurniture