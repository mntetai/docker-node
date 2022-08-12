var db = require('../database.js');
const myTimeout = setTimeout(migrate, process.env.DB_MIGRATION_TIMEOUT);

function migrate(){
	db.sequelize.sync();
	console.log("migration done");
}