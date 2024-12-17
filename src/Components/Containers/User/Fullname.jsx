import { Firstname } from "./FirstName";
import { Lastname } from "./LastName";

export function Fullname(){
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '5px'
        }}>
            <Firstname />
            <Lastname />
        </div>
    )
}