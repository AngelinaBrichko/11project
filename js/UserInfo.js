class UserInfo {
    constructor(name,job, api) {
        this.name = name
        this.job =  job
        this.api = api
    }
    
    setUserInfo(){
        this.api
        .getUserInfo()
        .then(data => {
          const {name, about } = data;
          this.updateUserInfo(name,about)
        })
        
    }

    updateUserInfo(name, about){
        const userInfoName = document.querySelector('.user-info__name');
        const userInfoJob = document.querySelector('.user-info__job');
      
        userInfoName.textContent = `${name}`;
        userInfoJob.textContent =`${about}`;
    
    }
}