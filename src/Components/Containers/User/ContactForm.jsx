import { useState } from "react";
import { Button } from "../../UI/Button/Button";

export function ContactForm() {

    const [inputName, setInputName] = useState("")
    const [inputError, setInputError] = useState("")


    function getFullName(event) {
        const value = event.target.value
        setInputName(value)
    }

    function submitForm() {
        if (inputName === "") {
            setInputError('First and last name obligatory')
            return
        }
        alert('contact ' + inputName)
            setInputName("")
            setInputError("")  
    }
    return(
            <div>
                <h2>Contact Form</h2>
                <input
                value={inputName}
                onChange={getFullName} 
                className="bg-neutral-800 p-2 w-full border-2"
                type="text"
                placeholder="Full name">
                </input>
                <p className="text-red-600 text-sm">{inputError}</p>
                <Button callBack={submitForm}>Send message</Button>
            </div>
        )
}