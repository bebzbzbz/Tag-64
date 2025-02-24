import { useState } from "react";

function Form() {
    const [outputVorname, setOutputVorname] = useState("")
    const [outputNachname, setOutputNachname] = useState("")
    const [outputEmail, setOutputEmail] = useState("")

    return(
        <div className="form">
            <div>
                <input type="text" placeholder="Vorname" onChange={e => setOutputVorname(e.target.value)}/>
                <input type="text" placeholder="Nachname" onChange={e => setOutputNachname(e.target.value)}/>
                <input type="text" placeholder="Email" onChange={e => setOutputEmail(e.target.value)}/>
            </div>
            <p>Vorname: {outputVorname}</p>
            <p>Nachname: {outputNachname}</p>
            <p>Email: {outputEmail}</p>
        </div>
    )
}

export default Form