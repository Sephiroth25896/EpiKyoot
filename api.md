# Requêtes API
## Base de l'API
**URL** 
https://sokyoot-dev-japi.cleverapps.io (URL de dev donc si vous faites des erreurs c'est pas grave)

**Headers** 

`Content-Type` `application/json`

`Auhtorization` token (Utile que pour les routes privés, ici pour le like d'un produit)

## Login

### #Se connecter
`GET` `/v1/authentication/local`

**Body**

* `login` Adresse email
* `password` Mot de passe en MD5

**Exemple**  `https://sokyoot-dev-japi.cleverapps.io/v1/authentication/local`
```
{
  "login":"example@test.fr",
  "password": "098f6bcd4621d373cade4e832627b4f6"
}
```


## Produits
### #Obtenir la liste des produits
`GET` `/v1/products` (public)

**Parametres disponibles**

* `sort` Choisir l'ordre d'affichage des produits (`-createdAt`, `like`, ...etc) Si vous mettez un `-` devant la variable à sort, ca veux dire descendant, sinon c'est ascendant.
* `limit` La limite de produit par page
* `page` Numéro de la page a affiche (commence à 0)
* `populate` Boolean pour poupulate ou non l'objet (Par exemple dans l'objet vous allez avoir `sellerId:"5a5f0aaeceef370648156794"`, si vous populate, ca va remplacer les ID par l'objet)

**Exemple**  `https://sokyoot-dev-japi.cleverapps.io/v1/products?page=0&limit=10&sort=like&poupulate=true`


### #Obtenir un produit par ID
`GET` `/v1/products/:id` (public)

**Parametres disponibles**

* `populate` Boolean pour poupulate ou non l'objet

**Exemple**  `https://sokyoot-dev-japi.cleverapps.io/v1/products/5a6eeb678e80bc0652ebabac?poupulate=true`

### #Liker un produit
`POST` `/v1/products/:id/like` (private, utilisation du token dans le header)

**Exemple**  `https://sokyoot-dev-japi.cleverapps.io/v1/products/5a6eeb678e80bc0652ebabac/like`
