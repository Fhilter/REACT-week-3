import { Firstname } from "./FirstName";
import { Lastname } from "./LastName";

export function Fullname(props){
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '5px'
        }}>
            <Firstname firstName={props.firstName}/>
            <Lastname lastName={props.lastName}/>
        </div>
    )
}