export function Button(props) {
    //pass props through the children object like below, or destructure and use normal names inside an object { color, bold, children } passing them as props, and then remove "props" before the variables below. This two options do the same thing
    return(
        <button 
        className="text-neutral-200 b-none p-4 my-8 rounded hover:scale-125 transition"
        style={{
            backgroundColor: props.color ? props.color: "black",
            fontWeight: props.bold ? "bold" : "default"
            }}>
            {props.children}
        </button>
    )
}
