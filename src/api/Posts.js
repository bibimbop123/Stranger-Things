export async function fetchPosts(){
    try {
        const response = await fetch(`${BASE_URL}/posts`)
        const apiData = await response.json()
        console.log(apiData)
        return apiData
    }catch(error){
        console.error(error.message)
    }
}