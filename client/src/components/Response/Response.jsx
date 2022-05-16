import React from 'react';
import './Responses.scss';

import ResponseCards from '../ResponseCards/ResponseCards.jsx';

const Response = ({ data, visibility }) => {
  return(
    <section className="responses">
			{data
				.filter(( {response} ) => response.length)
				.map(({ id, ...otherItemProps }) => {
					return (
						<ResponseCards
								key={id}
								{...otherItemProps} 
						/>
					)
				})
			}
    </section>
  )
}

export default Response;
