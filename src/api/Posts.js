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
