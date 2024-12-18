import { useState } from "react";
import { Button } from "../../UI/Button/Button";

export function Menu() {

const [text, setText] = useState('show')
const [menu, setMenu] = useState(false)

    function toggleMenu() {
        setText(text === "show" ? "hide" : "show")
        setMenu(!menu)
    }

    return(
        <>
        <Button callBack={toggleMenu}>{text}</Button>
        {menu && (
                <ul> Menu drawer
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Profile</li>
                </ul>
            )}
        </>
    )

}