import ResponseItems from '../ResponseItems/ResponseItems.jsx';

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
