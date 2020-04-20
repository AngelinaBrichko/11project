export default class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl
    this.headers = options.headers
  }

  getUserInfo() {
    return fetch(this.baseUrl + '/users/me', {
      method: 'GET',
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, переходим в catch
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      
        
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  getInitialCards() {
    return fetch(this.baseUrl + '/cards', {
      method: 'GET',
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, переходим в catch
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      

      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  updateUserInfoOnServer(userInfo) {
    return fetch(this.baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: userInfo.name.value,
        about: userInfo.job.value
      })
    })

      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, переходим в catch
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });

  }

  addCardOnServer(newCard) {
    return fetch(this.baseUrl + '/cards', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: newCard.name,
        link: newCard.link
        })
    })

      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, переходим в catch
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });

  }

}
 

