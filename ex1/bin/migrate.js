var db = require('../database.js');
const myTimeout = setTimeout(migrate, 30000);

function migrate(){
	db.sequelize.sync();
}