import axios from "axios";

export async function registerAccount(username, fullname, email, gender, birthdate, password) {
    const API ='http://localhost:8080/api/v1/auth/register'

    const res = axios.post(API, {
            username : username,
            fullname : fullname, 
            email : email,
            gender : gender, 
            birthdate : birthdate,      
            password : password
        })
    return res;

};

