export default class User {
    constructor(data){
        if(data){
            this.username = data.userName;
            this.password = data.password;
            this.email = data.email;
            this.number = data.number;
            this.gender = data.gender;
            this.key = data.key;
            this.currentDt = data.currentDt;
            this.updatedDt = data.updatedDt;
            this.status= data.status;
            if(data.admin){
                this.admin = data.admin;
            }
        }
    }
}

