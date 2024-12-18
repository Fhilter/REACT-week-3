import { useState } from "react"
import { Button } from "../../UI/Button/Button"

export function Counter() {

    const [counter, setCounter] = useState(0)

    function increase() {
        setCounter(counter - 1)
    }
    function decrease() {
        setCounter(counter + 1)
    }

    return(
        <div>
            <h2>{counter}</h2>
            <Button callBack={increase}>-1</Button>
            <Button callBack={decrease}>+1</Button>
        </div>
    )
}