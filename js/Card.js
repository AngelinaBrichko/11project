class Card {
    constructor(name, link) {
      this.name = name;
      this.link = link;
      this.placeCard = null;
  }
    


    create() {
      this.placeCard = document.createElement('div');
      this.placeCard.classList.add('place-card')

      const template = `<div class="place-card__image" style="background-image: url(${this.link})">
        <button class="place-card__delete-icon"></button>
      </div>
      <div class="place-card__description">
        <h3 class="place-card__name">${this.name}</h3>
        <button class="place-card__like-icon"></button>
      </div>`;
      
      this.placeCard.innerHTML = template;

      this.placeCard.querySelector('.place-card__delete-icon')
      .addEventListener('click', this.remove.bind(this));

      this.placeCard.querySelector('.place-card__like-icon')
      .addEventListener('click', this.like.bind(this));

      return this.placeCard;

    }

    like(event) {
      if (event.target.classList.contains('place-card__like-icon')) {
        event.target.classList.toggle('place-card__like-icon_liked');
      }
    }

    remove() {
     this.placeCard.remove()
    }
}