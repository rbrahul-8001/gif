import { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {

    const [gif, setGif] = useState("")
    const [loading, setLoading] = useState(false)

    async function getgif() {
        setLoading(true)
        const url = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`)
        const imageSource = url.data.data.images.downsized_large.url;
        setGif(imageSource)
        setLoading(false)
    }

    useEffect(() => {
        getgif()
    }, []);


    return { gif, loading, getgif }
}

export default useGif

// &tag=${tag}
