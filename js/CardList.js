class CardList {
  constructor(placesList, api) {
    this.placesList = placesList;
    this.api = api
  
  }

  render() {
    this.api.getInitialCards() 
    .then((cards)  => {
      for (let i=0; i<cards.length; i++) {
        const card = new Card(cards[i].name, cards[i].link);
        const placeCard = card.create()
        this.placesList.appendChild(placeCard)
      } 
    })
}

  addCard(newCard) {
    api.addCardOnServer(newCard)
    .then ((cardData) => {
      const {name, link} = cardData;
      const card = new Card(name,link)
      const placeCard = card.create()
      this.placesList.appendChild(placeCard)
  })
  }
}
