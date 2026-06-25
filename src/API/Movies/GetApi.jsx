import axios from "axios"

export const getAPI = async () => {
    try {
        const apiKey = import.meta.env.VITE_moviesapi
        
        const data = await axios.get(`http://www.omdbapi.com/?i=${apiKey}`)
        return data

    } catch(error) {
        return error
    }
}