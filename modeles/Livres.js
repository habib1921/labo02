const mongoose = require('mongoose');

// schéma de données pour la collection Livres
// 
//// on défini le schéma de données (les champs qu'va utiliser)pour la collection livre en déclarant la variable schemaLivre 
let schemaLivre = mongoose.Schema({   //// il existe une class qui s'appelle Schema
    _id: {
        type: String,
        required: true
    },
    titre: {
        type: String,
        required: true
    },
    auteur: {
        type: String,
        required: true
    },
    editeur: {
        type: String,
        required: true
    },
    langue: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    nbPage: {
        type: Number,
        required: false
    }
});  //// on crée une variable Livres qui va etre une exportation et qui va prendre
     // deux parametres :le nom de la collection (livres) et le nom du schema.   
let Livres = module.exports = mongoose.model('livres', schemaLivre ); //

// méthodes pour obtenir les livres...
// cette fonction ou methode est nommée getLivres et on va l'exporter au programme principal. Elle prend deux parametres
//// un collback et une limit
module.exports.getLivres = (callback, limit) => {
    Livres.find(callback).limit(limit); // Livres est le model à la base de donnees dans mangoose (le fichier Livres.js dans modeles)
    // Find() fait reference a ce que je rentre en ligne de commande dans Find quand je fait des requetes dans mongoDB.
    //// donc il va trouver tous les livres et il va se limiter a limit. apres il appele un callback. 
    //// Le callback ici c'est le filtre qu'on mets a l'interieur de Find()
}; ////on s'en va maintenant a mom programme principal index.js et ja appelle ma fonction getLivres
//// On sauvgarde et on s en va a index.js