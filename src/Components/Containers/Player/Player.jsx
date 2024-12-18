const winningScore = 300;

export function Player() {

    const score = 350;
    let result = score > 300 ? "WINNER" : "LOSER";

    return(
        <>
            <h2>To win: {winningScore}</h2>
            <p style={{ color: score > winningScore ? "green" : "red" }}>
                <>Your score {score} = {result}</>
            </p>
        </>

    )
}