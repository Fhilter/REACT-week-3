import { useState } from "react";
import { Button } from "../../UI/Button/Button";

export function Menu() {

const [text, setText] = useState('show')
const [menu, setMenu] = useState(false)

    function openMenu() {
        setText(text === "show" ? "hide" : "show")
        setMenu(!menu)
    }

    return(
        <>
        <Button callBack={openMenu}>{text}</Button>
        {menu && (
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Profile</li>
                </ul>
            )}
        </>
    )

}