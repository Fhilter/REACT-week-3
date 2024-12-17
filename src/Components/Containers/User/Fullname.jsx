import { Firstname } from "./FirstName";
import { Lastname } from "./LastName";

export function Fullname(){
    return(
        <div>
            <Firstname />
            <Lastname />
        </div>
    )
}