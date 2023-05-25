import postApiClient from "../../utils/postApiClient";


export async function createPost(
  data
) {
  const res = postApiClient
    .post("/create_post", {
      ...data
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
