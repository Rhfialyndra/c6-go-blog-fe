import postApiClient from "../../utils/postApiClient";


export async function deletePost(
  postId
) {
  const res = postApiClient
    .delete(`/delete_post/${postId}`)
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
