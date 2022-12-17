const router = require('express').Router();

const { Furniture } = require('./../../models')

// get all furniture
router.get('/', async (req,res) => {
    try {
        const allFurniture = await Furniture.find()
        res.json(allFurniture)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.post('/', async (req,res)=>{
    try {
        const newFurniture = await Furniture.create(req.body)
        res.json(newFurniture)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

// get one furniture item by id
router.get('/:id', async (req,res) => {
    try {
        const oneFurniture = await Furniture.findOne({_id: req.params.id})
        res.json(oneFurniture)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

// update one furniture item by id
router.put('/:id', async (req,res) => {
    try {
        const updatedFurniture = await Furniture.findOneAndUpdate(
            {_id: req.params.id},
            { $set: 
                {
                furnitureName: req.body.furnitureName,
                price: req.body.price,
                obtainedBy: req.body.obtainedBy,
                style: req.body.style,
                furnitureCategory: req.body.furnitureCategory,
                color: req.body.color,
                universe: req.body.universe
                }
            },
            { runValidators: true, new: true }
            )
        res.json(updatedFurniture)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})



module.exports = router;