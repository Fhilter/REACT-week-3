import { useState } from "react"
import { Button } from "../../UI/Button/Button"

export function Hobbies({ hobbies = [] }) {

    const [newHobby, setNewHobby] = useState('')
    const [inputError, setInputError] = useState("")
    const [initialHobbies, setInitialHobbies] = useState(hobbies)


    function getHobbyInput(event) {
        const value = event.target.value
        setNewHobby(value)
    }

    function submitHobby() {
        if (newHobby === "") {
            setInputError('You forgot to add your hobby')
            return
        }
        setInitialHobbies([...initialHobbies, { id: initialHobbies.length + 1, name: newHobby.trim() }])
        alert('Congrats, you now like ' + newHobby)
            setNewHobby("")
            setInputError("")  
    }

    return(
        <div>
            <p>My Hobbies are:</p>
            {initialHobbies.map((hobby) => {
                return(
                    <li key={hobby.id} style={{
                        padding: '5px',
                        textAlign: 'left',
                    }}>{hobby.name}</li>
                )
            })}
            <input 
            placeholder="Add a hobby"
            onChange={getHobbyInput}
            className="bg-neutral-800 p-2 w-full border-2"
            type="text"
            />
            <p className="text-red-600 text-sm">{inputError}</p>
            <Button callBack={submitHobby}>Add Hobby</Button>
        </div>
    )
}