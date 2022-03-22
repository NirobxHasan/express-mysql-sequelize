const db = require('../models')

//model
const Review = db.reviews

//1. add review

const addReview= async(req,res)=>{
    let data = {
        product_id: req.body.product_id,
        rating: req.body.rating,
        description: req.body.description
    }
    const review  = await Review.create(data);
    res.status(200).send(review)
}

const getAllReview= async(req,res)=>{
    const reviews = await Review.findAll({})
    res.status(200).send(reviews);
}

module.exports = {
    addReview,
    getAllReview
}