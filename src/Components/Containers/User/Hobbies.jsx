export function Hobbies() {

    const hobbies = [{name: "Cycling", id: "uib25FHPQEF"}, {name: "Lego", id: "iafboafbw23"}, {name: "F1", id: "uqh98yqe2w9"}]

    return(
        <div>
            <p>My Hobbies are:</p>
            {hobbies.map((hobby) => {
                return(
                    <li key={hobby.id} style={{
                        padding: '5px',
                        textAlign: 'left',
                    }}>{hobby.name}</li>
                )
            })}
        </div>
    )
}