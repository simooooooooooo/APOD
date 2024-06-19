const gateway = "https://api.nasa.gov/planetary/apod"
const apikey = "CHDQXcj6jw62YsFzzmbmPDK9Y0eeyEfkth3OKdBW"

export default api = async (parametros = "") => {
    try {
        const response = await fetch(`${gateway}?api_key=${apikey}${parametros.length > 0 ? parametros: ""}`);
        return await response.json();
    } catch (error) {
        console.error("error en api 1",error)
    }
    finally{
    }
    return;
}