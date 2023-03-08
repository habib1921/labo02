const mongoose = require('mongoose');

 
let schemaUser = mongoose.Schema({  
    _id: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    }
    
});   
let Users = module.exports = mongoose.model('users', schemaUser ); 


module.exports.getUsers = (callback, limit) => {
    Users.find(callback).limit(limit); 
}; 

// recherche par Champ (login, nom, etc.)
module.exports.getUserParChamp = (nomChamp, critere, callback,limit) => {
    // let query = new Object();
    // query[nomChamp] = RegExp(critere);
    const query = {[nomChamp]: RegExp(critere)};
    console.log(query);
    Users.find(query, callback).limit(limit);
}