
const { DataTypes } = require("sequelize")
const ProductModel = (sequelize)=> {
    const Product = sequelize.define("product",{
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.INTEGER,
            
        },
        description:{
            type: DataTypes.TEXT
        },
        published:{
            type: DataTypes.BOOLEAN
        },
        //timestamp: false  // if we do not want 
        
    })

    return Product
}

module.exports = ProductModel;



// module.exports = (sequelize, DataTypes) =>{

//     const Product = sequelize.define("product",{
//         title:{
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         price:{
//             type: DataTypes.INTEGER
//         },
//         description:{
//             type: DataTypes.TEXT
//         },
//         published:{
//             type: DataTypes.BOOLEAN
//         },
//         //timestamp: false  // if we do not want 
        
//     })

//     return Product

// }