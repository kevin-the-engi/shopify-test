import './Responses.scss';

import ResponseCards from '../ResponseCards/ResponseCards.jsx';

const Response = ({ data }) => {
    return(
        <div className="responses">
            <h2>Responses</h2>

            {data.map(({ id, ...otherItemProps }) => {
                console.log(id)
                return (
                <ResponseCards
                    key={id}
                    {...otherItemProps} />
                )})
            }
        </div>
    )
}

export default Response;
