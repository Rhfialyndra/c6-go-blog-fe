import postApiClient from "../../utils/postApiClient";

export function getPostById(postId) {
  const res = postApiClient
    .post("/get_post_by_id", {
      postId: postId,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return {
        status: error.response.status,
        message: error.response.data.message ?? "",
      };
    });
  return res;
}
