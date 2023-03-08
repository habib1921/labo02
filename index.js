const express = require('express');
const mongoose = require('mongoose'); //   facilite la connection à MongoDB
const app = express(); // c'est un objet express par exemple app.get pour aller 
                       // chercher le GET, app.POST pour aller chercher le POST

mongoose.set('strictQuery', false); // cette instruction a été ajouté à la fin suite à une erreur

mongoose.connect('mongodb+srv://habib:habib23@cluster0.v6qkwcb.mongodb.net/labo01'); // connexion à la base de donnée Atlas 
// mongoose.connect('mongodb://localhost/labo01'); // connexion la bd local, mais elle n'a pas fonctionné



/////--------------------------------------------------------------------------------------------------------------------------------
const {getLivres} = require('./modeles/Livres.js'); // cette partie est rajouté vers la fin, on importe la fonction getLivre   -----
const Livres = require('./modeles/Livres.js'); // on importe la class Livres                                                    -----
app.use(express.json()); //// pour fournir les resultat au logiciels de navigation sous format JSON                             ------
// sans express ca aurait ete plusieurs lignes de programmes                                                                    ------
//// ---------------------------------------------------------------------------------------------------------------------------------



const db = mongoose.connection; // connexion établie 
console.log('message juste ici');   // le mongoose.connect('.... et const db = mongoose.connection; sont deux fonctionalite 
                                // asynchrone, le programme continue de s'executer comme si rien n'est y ete  
db.on('error', (err) => { //// gestion des erreurs de connexion , sur une erreur, ....
    console.error('erreur de BD:', err);  // on affiche l'erreur dans la console error
});

db.once('open', () => { // une fois la connexion établie
    console.log('Connexion à la BD OK!!!');
});
console.log('fin du programme'); //// jusqu'ici, le programme fait la connexion à la base de Donnée.  


app.get('/', (requete, reponse) => {   //// app.get defini une route (un URI) de type GET.
    reponse.send('utilisez /api/livres pour faire appel au service Web des livres...');  
  ////  app.get('/') : cette instruction est lue : si le logiciel de navigation (chrome,FireFox, ...)
 // // demande pour l'élément racine /, on envoie une réponse. 
 //// le '/' c'est ce qu'on tape dans la bare de navigation, 
 // // la requete c'est une autre affaire (c'est ce qu'on envoie, comme dans les formulaire) 
}); //// la réponde qu'on envoie (reponse.send) c'est juste afficher le message utiliser /api/livres......

app.get('/api/livres', (requete, reponse) => {
   
    Livres.getLivres((err, livres)=>{    
        if (err) throw err;
        reponse.json(livres);
    }, 5);
});

app.listen(8000); ////  Le serveur écoute pour la requete sur le port 8000
console.log('service Web fonctionnel sur port 8000');
 //// Remarque : ici on utilise express pour créer notre service web, c'est plus sophistiquée que ce que 
 //// nous avons fait avant dans le premier cours. 
 /**
  * la partie ou on cree le serveur c'est ca: 
  * 
  * app.get('/', (requete, reponse) => {
  * reponse.send('utilisez /api/livres pour faire appel au service Web des livres...'); 
  * });
  * app.listen(8000);
  * console.log('service Web fonctionnel sur port 8000');
  *  */ 
 