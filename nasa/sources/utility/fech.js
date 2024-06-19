const gateway = "https://api.nasa.gov/planetary/apod"
const apikey = "VKhWfIMLTPdvczPVBrApN3eAs4G2E1CjY6HvCbLD"

export default api = async (parametros = "") => {
    try {
        //prueba codigo
        const response = await fetch(`${gateway}?api_key=${apikey}${parametros.length > 0 ? parametros: ""}`);
        return await response.json();
    } catch (error) {
        console.error("error en api 1",error)
    }
    finally{
    }
    return;
}