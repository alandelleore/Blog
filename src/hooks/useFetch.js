import { useState, useEffect } from "react"


export const useFetch = (url) => {

    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            
            .catch((e) => setError('Error en servidor'))
            .finally(() => setLoading(false))
    }, [url])
    
    console.log(data)



  return {data, error, loading}
}
