const productController = require('../controllers/productController.js')

const router = require('express').Router()
console.log('okk');
router.post('/addProduct', productController.addProduct)
router.get('/allProduct', productController.getAllProduct)



//get product reviews
router.get('/getProductReview/:id', productController.getProductReviews)


router.get('/:id', productController.getSingleProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router;