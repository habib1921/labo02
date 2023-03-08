const express = require('express');
const mongoose = require('mongoose'); //   facilite la connection à MongoDB
const app = express(); // c'est un objet express par exemple app.get pour aller 
                       // chercher le GET, app.POST pour aller chercher le POST

mongoose.set('strictQuery', false); // cette instruction a été ajouté à la fin suite à une erreur

mongoose.connect('mongodb+srv://habib:habib23@cluster0.v6qkwcb.mongodb.net/labo01'); // connexion à la base de donnée Atlas 
// mongoose.connect('mongodb://localhost/labo01'); // connexion la bd local, mais elle n'a pas fonctionné



/////--------------------------------------------------------------------------------------------------------------------------------



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




app.use('/',require('./routes/index')); // quand une route generale, va chercher dans index.js dans routes
app.use('/api',require('./routes/api')); // quand une route commence par /api, va chercher ./routes/api


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
 