
export function Header() {
    const isJour = true;
    return (
        <header>
            <h1>Bienvenue et {isJour ? "Bonjour" : "Bonsoir"}</h1>
            <p>This is a paragraph, ain't she pretty</p>
        </header>
    )
}