const router = require('express').Router();

const furnitureRoutes = require('./Furniture-routes');
const clothingRoutes = require('./Clothing-routes');
const craftingRoutes = require('./Crafting-routes')

router.use('/clothing', clothingRoutes);
router.use('/crafting', craftingRoutes);
router.use('/furniture', furnitureRoutes);


module.exports = router;