import { Button } from "../../UI/Button/Button";

export function Routine() {
  

        function clickRoutine(action) {
            alert(`Time to ${action}!`)
        } 

        return(

            <>
            <h2>My Routines</h2>
            <Button
            callBack={ function() {clickRoutine('EAT')}}>
            EAT
            </Button>
            <Button
            callBack={function() {clickRoutine('SLEEP')}}>
            SLEEP
            </Button>
            <Button
            callBack={function() {clickRoutine('RAVE')}}>
            RAVE
            </Button>
            <h2>REPEAT</h2>
            </>

        )

}