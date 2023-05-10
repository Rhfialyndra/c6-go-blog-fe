import blogApiClient from "../../utils/blogApiClient";


export async function createPost(
  blog
) {
  const res = blogApiClient
    .post("/create-post", {
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
