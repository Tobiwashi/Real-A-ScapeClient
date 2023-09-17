import axios from "axios"
import { useState, useEffect } from "react"



function Spain() {
    const [estate, setEstate] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/estates/')
            .then(res => { setEstate(res.data) })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
        </>
    )
}

export default Spain