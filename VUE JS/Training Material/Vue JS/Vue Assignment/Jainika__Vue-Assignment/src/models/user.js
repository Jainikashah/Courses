export default class user {
    username= "";
    password= "";
    number= null;
    email= "";
    state= null;
    country= null;
    gender= null;
    userType= "FE Trainee";

    constructor(data){
        if(data){
            this.username = data.username;
            this.password = data.password;
            this.number = data.number;
            this.email = data.email; 
            this.state = data.state;
            this.country = data.country;
            this.gender = data.gender;
            this.userType = data.userType;
        }
    }
}