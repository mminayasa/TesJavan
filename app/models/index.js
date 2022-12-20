const dbConfig = require('../config/db.config.js')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,


    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.family_users = require('./family.users.model.js')(sequelize, Sequelize)
db.family_user_assets = require('./family.assets.model.js')(sequelize, Sequelize)

db.family_users.hasMany(db.family_user_assets, { as: 'family_user_assets' })
db.family_user_assets.belongsTo(db.family_users, {
    foreignKey: 'familyUserId',
    as: 'family_user'
})

module.exports = db
