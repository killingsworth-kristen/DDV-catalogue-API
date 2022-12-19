const router = require('express').Router();

const { Furniture } = require('./../../models')

// get all furniture/queried furniture
router.get('/', async (req,res) => {
    try {
        const allFurniture = await Furniture.find(req.query)
        res.set('Access-Control-Allow-Origin', '*');
        res.json(allFurniture)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

// create new furniture
router.post('/', async (req,res)=>{
    try {
        const newFurniture = await Furniture.create(req.body)
        res.set('Access-Control-Allow-Origin', '*');
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
        if (!oneFurniture) {
            res.status(404).json({msg: "Furniture Item not found!"})
        }
        res.set('Access-Control-Allow-Origin', '*');
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
            if (!updatedFurniture) {
                res.status(404).json({msg: "Furniture Item not found!"})
            }
        res.set('Access-Control-Allow-Origin', '*');
        res.json(updatedFurniture)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.delete('/:id', async (req,res)=>{
    try {
        const deletedFurniture = await Furniture.deleteOne({_id: req.params.id});
        if (!deletedFurniture) {
            res.status(404).json({msg: "Furniture item not found!"})
        }
        res.set('Access-Control-Allow-Origin', '*');
        res.json(deletedFurniture)
    } catch (err) {
        console.log(err);
        res.json(err)
    }
})




module.exports = router;