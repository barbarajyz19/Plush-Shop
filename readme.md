# Plush SHOP - LICENCE 2

## Mise en place du TP

  Cette mise en place est similaire à celle du TP précédent. Le dossier `tp3` contient une structure telle que celle décrite dans ce [document](https://intranet.fil.univ-lille.fr/2020/04/09/nodejs-et-npm/).  
  1. Dans le dossier `Plush-Shop/` exécutez
```bash  	  
Plush-Shop$  npm install
```  
  2. Exécutez la commande `npm run build` pour créer le dossier `./dist/` et construire un premier *bundle*
  3. Vous pouvez ouvrir le fichier `dist/index.html`, pour vérifier que tout s'est bien déroulé en consultant la console (<kbd>Ctrl Shift K</kbd>) dans laquelle vous devez lire le message `le bundle a été généré`.  

  >  Attention, le résultat <strong>ne se consulte pas</strong> avec le fichier `src/index.html` : vous devez faire vos modifications et votre travail dans le dossier `src/` **mais le résultat du travail est observé dans le dossier `dist/`**.

  4.	Pendant le TP vous devrez compléter ou créer les modules JavaScript demandés.  
    Comme dans le TP précédent, profitez des facilités offertes par Webpack pendant la phase de développement pour construire le bundle et visualiser les résultats "à chaud" en démarrant le serveur de développement :Après chaque modification, il faut générer le <q>nouveau</q> <i>bundle</i>, toujours à l'aide de la commande <code>npm run build</code> et c'est le fichier **`dist`**`/index.html` qu'il faut consulter pour avoir le résultat

```bash
Plush-Shop$  npm run dev-server
```

  **C'est la solution que l'on vous conseille d'adopter.**

  5. N'oubliez pas d'exécuter la commande <code>npm run build</code> après l'arrêt du serveur de développement pour mettre à jour le dossier `dist/`.

> NB : le dossier `dist/` ne sera pas mis sur le dépôt car il peut être regénéré à partir des sources.

## Votre travail

Tout a ete realisé.
Pour executer le projet il faut:
- se placer dans le fichier Plush-Shop/
- mettre la commande npm install
- mettre la commande npm run dev-server
- mettre la commande npm run build
- ouvrir index.html avec firefox qui se trouve dans le dossier dist
