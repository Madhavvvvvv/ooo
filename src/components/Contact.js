import { useState } from "react";

function Contact()
{
    const [name,setName] = useState("Madhav");

    const handleClick = () =>{
        setName("Virat")
    }
    return(
        <div>
            <h1>Contact detials</h1>
            <h2>The Owner of this page is {name}</h2>
            <button onClick={handleClick}>Change Owner</button>
        </div>
    )
}
export default Contact;