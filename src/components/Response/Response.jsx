import './Responses.scss';

import ResponseCards from '../ResponseCards/ResponseCards.jsx';

const Response = ({ data, visibility }) => {
    return(
        <section className="responses">
            {visibility ? <h2>Responses</h2> : null}

            {data
                .filter(( {response} ) => response.length)
                .map(({ id, ...otherItemProps }) => {
                    return (
                    <ResponseCards
                        key={id}
                        {...otherItemProps} 
                    />
                )})
            }
        </section>
    )
}

export default Response;
