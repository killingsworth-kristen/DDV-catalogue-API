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
    //     setId: 3
    // },
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // },  
    //   {
    //     furnitureName: ``,
    //     price: ,
    //     obtainedBy: "Scrooge's Store",
    //     
    //     tagId: [],
    //     setId: 3
    // }
]

module.exports=walleFurniture