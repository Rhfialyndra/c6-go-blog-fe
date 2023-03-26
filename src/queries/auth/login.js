import axios from "axios";

export async function login(username, paswd) {
    API=''

    const res = await axios.post(API, {
        username : username,
        password : passwd
    })

    return res.data

};

