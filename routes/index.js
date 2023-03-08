const express = require('express');
const router = express.Router();

router.get('/', (requete, reponse) => {   //// app.get defini une route (un URI) de type GET.
    //// app.get est remplace par router.get 
    reponse.send('utilisez /api/livres pour faire appel au service Web des livres...');  
  ////  app.get('/') : cette instruction est lue : si le logiciel de navigation (chrome,FireFox, ...)
 // // demande pour l'élément racine /, on envoie une réponse. 
 //// le '/' c'est ce qu'on tape dans la bare de navigation, 
 // // la requete c'est une autre affaire (c'est ce qu'on envoie, comme dans les formulaire) 
}); //// la réponde qu'on envoie (reponse.send) c'est juste afficher le message utiliser /api/livres......

module.exports = router; 