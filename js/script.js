
class Card {

    /**
     * Initialise l'instance d'un objet carte
     * @param {String} name nom de la carte
     * @param {String} urlImg url de l'image de la carte
     * @param {boolean} response  valeur de la carte true => si c'est la bonne réponse 
     */
    constructor (name, urlImg, response) {
        this.name = name;
        this.urlImg = urlImg;
        this.response = response;
        this.answer = "";
    }

    /**
     * Permet de créer le html de la carte dans le body
     */
    genererHTML() {
        /* L'interface d'une carte est composée de 3 éléments */
        let cardContainer = document.createElement('div');      // Contenaire de la carte
        let titleCard = document.createElement('p');            // Titre de la carte
        let imgCard = document.createElement('img');            // Image de la carte

        /* Ajout des propriétées pour chaque éléments */
        cardContainer.classList.add('card-container');
        titleCard.classList.add('text');
        imgCard.src = this.urlImg;

        /* Réunion des éléments dans le contenaire de la carte */
        cardContainer.appendChild(imgCard);
        cardContainer.appendChild(titleCard);

    }

    /** SETTER */
    set question(newAnswer) {
        this.answer = newAnswer
    }
}