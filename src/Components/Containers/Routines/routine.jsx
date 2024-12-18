import { Button } from "../../UI/Button/Button";

export function Routine() {



    

        function clickRoutine(action) {
            alert(`Time to ${action}!`)
        } 

        return(

            <>
            <h2>My Routines</h2>
            <Button
            callBack={() => {clickRoutine('EAT')}}>
            EAT
            </Button>
            <Button
            callBack={() => {clickRoutine('SLEEP')}}>
            SLEEP
            </Button>
            <Button
            callBack={() => {clickRoutine('RAVE')}}>
            RAVE
            </Button>

            </>

        )

}