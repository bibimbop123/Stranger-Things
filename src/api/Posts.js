const COHORT = "2301-ftb-et-web-am";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`;

export async function fetchPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const apiData = await response.json();
    console.log(apiData);
    return apiData;
  } catch (error) {
    console.error(error.message);
  }
}

export async function createPost(title, description, price, token) {
  try {
    const response = await fetch(`${BASE_URL}/posts`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post:{
          title,
          description,
          price,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

export async function deletePost(token, postId) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    console.log("result in deletePost:", result);
    return result
  } catch (err) {
    console.error(err);
  }
}
