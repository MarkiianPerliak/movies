import axios from "axios"

export const getAPI = async (text) => {
    try {
        const apiKey = import.meta.env.VITE_moviesapi
        
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${text}?api_key=${apiKey}`)
        return data

    } catch(error) {
        return error
    }
}