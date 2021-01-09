const mongoose =  require('mongoose');
const { Schema } = mongoose;

const AuthSchema = new Schema({
    
}, { strict: false });
const AuthUser = mongoose.model('auth-users', AuthSchema);

module.exports = AuthUser;