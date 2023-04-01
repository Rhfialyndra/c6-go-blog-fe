import queryClient from "../../utils/QueryClient";

export async function loginUser(email, password) {
  const res = queryClient
    .post("/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.response.status,
        message: error.response.data.message ?? "",
      };
    });
  return res;
}
