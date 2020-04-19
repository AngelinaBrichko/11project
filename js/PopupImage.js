class PopupImage { 
    
      open(event) {
        if (event.target.classList.contains('place-card__image')) {
            const placeImage = event.target;
            const image = placeImage.getAttribute('style')
            const urlImage = image.slice(image.indexOf('(') + 1, image.indexOf(')'))
            const popupImage = document.querySelector('.img__size')
        
            popupImage.setAttribute('src', ''+ urlImage + '')
            document.getElementById('image').classList.add('popup_is-opened');
         }
      }
  
      close() {
        document.getElementById('image').classList.remove('popup_is-opened');
    }
  }