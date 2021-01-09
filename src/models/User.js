const mongoose =  require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    
}, { strict: false });
const UserDetails = mongoose.model('user-details', userSchema);

module.exports = UserDetails;