import React from 'react';
import './ResponseCards.scss';

const ResponseCards = ({ prompt, response }) => {
  return(
    <table className="responses-cards">
      <tbody>
        <tr>
					<th>Prompt: </th>
					<td>{prompt}</td>
				</tr>
				<tr>
					<th>Response: </th>
					<td>{response}</td>
				</tr>
			</tbody>
    </table>
  )
}

export default ResponseCards;
