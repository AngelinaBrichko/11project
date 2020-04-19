class Api {
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
      
        /*  Надо исправить: Для реализации вы создавали в прошлом спринте отдельные классы и методы.   
        *  Не переносите и не дублируйте реализацию в  класс Api. С класса можно только возвращать данные  
        *  которые получены от сервера. Реализацию необходимо удалить, а этот метод вызывать из других классов(методов)  
        */
        
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
      
        /*  Надо исправить: Для реализации вы создавали в прошлом спринте отдельные классы и методы.   
        *  Не переносите и не дублируйте реализацию в  класс Api. С класса можно только возвращать данные  
        *  которые получены от сервера. Реализацию необходимо удалить, а этот метод вызывать из других классов(методов)  
        */
      
     
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
/* 
* Надо исправить: Код разбит на разные файлы, но в отдельных файлах
* глобальные переменные должны быть скрыты (обернуты в IIFE или просто функцию) 
* http://getinstance.info/articles/javascript/immediately-invoked-function-expressions/
* Объявлять новые переменные или инициализировать классы лучше в одном из файлов
* как пример, используйте для этого script.js
*/


