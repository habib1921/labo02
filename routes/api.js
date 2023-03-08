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

router.get('/livres/titre/:titreLivre', (requete, reponse) => {
    Livres.getLivreParChamp("titre", requete.params.titreLivre, (err, livre)=>{
        if (err) throw err;
        reponse.json(livre);
    });
});       
router.get('/livres/auteur/:auteurLivre', (requete, reponse) => {
    Livres.getLivreParChamp("auteur", requete.params.auteurLivre, (err, livre)=>{
        if (err) throw err;
        reponse.json(livre);
    });
});


router.get('/users', (requete, reponse) => {
   
    Users.getUsers((err, users)=>{    
        if (err) throw err;
        reponse.json(users);
    }, 25);
});

// recherche par login et nom dans api/Users
// 1) par login
router.get('/users/login/:loginUser', (requete, reponse) => {
    Users.getUserParChamp("login", requete.params.loginUser, (err, user)=>{
        if (err) throw err;
        reponse.json(user);
    },5);
});
// 2) par nom
router.get('/users/nom/:nomUser', (requete, reponse) => {
    Users.getUserParChamp("nom", requete.params.nomUser, (err, user)=>{
        if (err) throw err;
        reponse.json(user);
    },5);
});

module.exports = router; 