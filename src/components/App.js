// create your App component here

import { useEffect, useState } from "react";

function App() {

    const [img, setImg] = useState("")

    useEffect(() => {
        
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(dog => {
            setImg(dog.message)})
    }, []
    )

    if (!img) {
        return <p>Loading...</p>
    }

    return <img src={img} alt="A Random Dog"/>
    }

export default App