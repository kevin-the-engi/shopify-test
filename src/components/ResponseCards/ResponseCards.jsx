const ResponseCards = ({ prompt, response }) => {
    return(
        <div className="container-cards">
            <h2>Responses</h2>

            <span className="prompt-text">{prompt}</span>
            <span className="response-text">{response}</span>
        </div>
    )
}

export default ResponseCards;
