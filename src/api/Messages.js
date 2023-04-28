export const COHORT_NAME = "2301-FTB-ET-WEB-AM";
export const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export async function postMessage(postId, token, content) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content: content,
        },
      }),
    });
    const result = await response.json();
    console.log("result message:", result);
    return result;
  } catch (error) {
    console.log(error);
  }
}
// export async function deleteMessage(token, MessageId) {
//     console.log("Message Id:", MessageId);
//     try {
//       const response = await fetch(`${BASE_URL}/posts/${MessageId}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const result = await response.json();
//       console.log("result in deletePost:", result);
//       return result;
//     } catch (err) {
//       console.error(err);
//     }
//   }
  