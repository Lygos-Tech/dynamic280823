const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
name: {
	type: String
},
email: {
	type: String
},
password: {
	type: String
},
naaaa: {
	type: Number
},
username: {
	type: String
}
}, {
	collection: 'Users'
})

module.exports = mongoose.model('Users', UserSchema)