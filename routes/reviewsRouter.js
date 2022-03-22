const reviewRouter = require('../controllers/reviewController')
const router = require('express').Router()



router.get('/addReview', reviewRouter.addReview)
router.get('/getAllReviews', reviewRouter.getAllReview)

module.exports = router;