import './ResponseCards.scss';

const ResponseCards = ({ id, prompt, response }) => {
    return(
        <div className="responses-cards">
            <span className="prompt-text">{prompt}</span>
            <span className="response-text">{response}</span>
        </div>
    )
}

export default ResponseCards;
