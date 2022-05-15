import ResponseItems from '../ResponseCards/ResponseCards.jsx';

const Response = ({ data }) => {
    return(
        <div className="container">
            {data.map(({ id, ...otherItemProps }) => (
                <ResponseItems
                    key={id}
                    {...otherItemProps} />
                ))
            }
        </div>
    )
}

export default Response;
