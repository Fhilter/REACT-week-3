export function Player() {
    const score = 300;
    let result = score >= 500 ? "winner" : "loser";




    return(
        <>
        {score}<p>=</p>{result}
        </>
    )
}