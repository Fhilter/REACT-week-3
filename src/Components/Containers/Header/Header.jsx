import classes from "./Header.module.css";

export function Header() {
    const isJour = true;
    return (
        <header className={classes.container}>
            <h1 className={classes.title}>Bienvenue et {isJour ? "Bonjour" : "Bonsoir"}</h1>
            <p>This is a paragraph, ain't she pretty</p>
        </header>
    )
}