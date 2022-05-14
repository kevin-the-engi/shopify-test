const ResponseItems = ({ prompt, response }) => {
    return(
        <div className="container-items">
            <span className="prompt-text">{prompt}</span>
            <span className="response-text">{response}</span>
        </div>
    )
}

export default ResponseItems;
