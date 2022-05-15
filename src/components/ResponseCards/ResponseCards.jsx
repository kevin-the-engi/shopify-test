import './ResponseCards.scss';

const ResponseCards = ({ prompt, response }) => {
    return(
        <table className="responses-cards">
            <tr>
                <th>Prompt: </th>
                <td>{prompt}</td>
            </tr>
            <tr>
                <th>Response: </th>
                <td>{response}</td>
            </tr>
        </table>
    )
}

export default ResponseCards;
