export function Button({color}) {
    return(
        <button style={{
            backgroundColor: color ? color: "black",
            color: "whitesmoke",
            padding: "1em",
            border: "none",
            borderRadius: '5px'
        }}>Validate</button>
    )
}