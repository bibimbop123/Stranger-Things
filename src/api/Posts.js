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
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
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
  console.log(postId);
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log("result in deletePost:", result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

/*export async function updatePost(postId, token) {
  try {
    // You will need to insert a variable into the fetch template literal
    // in order to make the POST_ID dynamic.
    // 5e8d1bd48829fb0017d2233b is just for demonstration.
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: `${newTitle}`,
          description: `${newDescription}`,
          price: `${newPrice}`,
          location: `${newLocation}`,
          willDeliver: true,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
*/