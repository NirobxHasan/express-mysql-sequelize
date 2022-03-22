const express = require('express')
const cors = require('cors')


const app = express()

let corOptions = {
    origin : 'https://localhost:8081'
}




//middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routers
const productRouter = require('./routes/productRouter.js')
const reviewRouter = require('./routes/reviewsRouter')

app.use('/api/products', productRouter)
app.use('/api/reviews',reviewRouter)

//testing api
app.get('/', (req,res)=>{
    res.send('hello')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running from port ${PORT}`);
})