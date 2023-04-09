import authApiClient from "../../utils/authApiClient";

export async function registerAccount(
  username,
  fullname,
  email,
  gender,
  birthdate,
  password
) {
  const res = authApiClient
    .post("/register", {
      username: username,
      fullname: fullname,
      email: email,
      gender: gender,
      birthdate: birthdate,
      password: password,
    })
    .then((response) => {
      //console.log(response)
      return response;
    })
    .catch((error) => {
      //console.log(error)
      return {
        status: error.response.status,
        message: error.response.data.message ?? "",
      };
    });
  return res;
}
