const Set = require(`../../models`)
const Tag = require(`../../models`)

// 41 pieces of furniture

const beatuyBeastFurniture = [
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },
    // {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     tagId: [],
    //     universe: "Beauty & the Beast"
    // },

]

module.exports=beatuyBeastFurniture