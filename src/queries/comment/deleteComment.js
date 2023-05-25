import commentApiClient from "../../utils/commentApiClient";


export async function deleteComment(
  commentId
) {
  const res = commentApiClient
    .delete(`/delete/${commentId}`)
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
