import { useEffect, useState } from "react"

export interface dataProto {
    img : string,
    title : string,
    price? : string | number,
    category? : string,
    id? : string
}

const useFetch = (url:string) => {

    let [isLoading, setIsLoading] = useState<boolean>(false)
    let [isError, setIsError] = useState<boolean>(false)
    let [data, setData] = useState<dataProto[]>([])
    
    useEffect(() => {
        setIsLoading(true)
        fetch(url)
        .then(response => response.json())
        .then((result) => {
            setIsLoading(false)
            setData(result)
        })
        .catch(error => {
            setIsLoading(false)
            setIsError(true)
            throw Error (error)
        })
    }, [])

    return {isLoading, isError, data}
}

export default useFetch