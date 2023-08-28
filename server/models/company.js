const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CompanySchema = new Schema({
name: {
	type: String
},
no: {
	type: Number
}
}, {
	collection: 'Companies'
})

module.exports = mongoose.model('Companies', CompanySchema)