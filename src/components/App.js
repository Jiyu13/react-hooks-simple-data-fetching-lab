// create your App component here

import { useEffect, useState } from "react";

function App() {

    const [img, setImg] = useState("")
    // const [fetched, setFetched] = useState(false)

    // const display = fetched ? "none" : ""
    useEffect(() => {
        
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(dog => {
            setImg(dog.message)})
    }, []
    )

    return <img src={img} alt="A Random Dog"/>
    }

export default App