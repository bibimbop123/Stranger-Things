const COHORT = "2301-ftb-et-web-am"
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`


export async function registerUser(username, password){
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          }
        })
      });
      const result = await response.json();
      console.log("result:", result)
      return result
    } catch (err) {
      console.error(err);
    }
  }

  export async function fetchMe(token){
    try{
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
        },
      });
      const result = await response.json()
      console.log("Result in fetchme function:", result)
    } catch (error){
      console.error(error)
    }
  }

 export async function loginUser(username,password){
  try {
    const response = await fetch(`${BASE_URL}/users/login`,{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        }
      }),
  });
    const result = await response.json();
    console.log(result);
    return result;
  } catch(error){
    console.log(error)
  }
 }

