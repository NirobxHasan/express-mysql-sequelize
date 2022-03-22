module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'express_sequelize_db',
    dialect: 'mysql',
    pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:10000
    }
}


