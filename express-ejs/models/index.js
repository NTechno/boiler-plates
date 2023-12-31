const dbConfig = require("../db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB , dbConfig.USER, dbConfig.PASSWORD , {
    host:dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases:false,
    pool :{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idel: dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize,
db.sequelize = sequelize,

db.user = require("./user.js")(sequelize, Sequelize);
module.exports = db;