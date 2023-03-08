const express = require('express');
const router = express.Router();
const Livres = require('../modeles/Livres.js'); // on importe la class Livres 
const Users = require('../modeles/Users.js'); // on importe la class Users 

router.get('/livres', (requete, reponse) => {
   
    Livres.getLivres((err, livres)=>{    
        if (err) throw err;
        reponse.json(livres);
    }, 25);
});

router.get('/users', (requete, reponse) => {
   
    Users.getUsers((err, users)=>{    
        if (err) throw err;
        reponse.json(users);
    }, 25);
});

module.exports = router; 