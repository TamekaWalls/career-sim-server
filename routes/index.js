const router = require('express').Router();
const authRoutes=require("./auth")
const itemsRoutes=require('./items')
const reviewsRoutes=require('./reviews')

router.use('/auth', authRoutes)
router.use('/items', itemsRoutes)
router.use('/reviews', reviewsRoutes)

module.exports = router;
