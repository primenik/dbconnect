const sequelize = require('./database/models').sequelize
require('dotenv').config()
// For Development
const initialiseDb = async () => {
    // {force: true} resets the db
    // {alter: true} alters the db structure without reseting
    await sequelize.sync({[process.argv[2]]: true})
    process.exit()
}
initialiseDb();
module.exports= initialiseDb();