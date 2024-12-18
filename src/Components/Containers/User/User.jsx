import { Fullname } from "./Fullname"
import { Hobbies } from "./Hobbies"

export function User(props) {
    return(
        <>
        <Fullname firstName={props.firstName} lastName={props.lastName}/>
        <Hobbies hobbies={props.hobbies}/>
        </>
    )
}