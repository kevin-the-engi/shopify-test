import React, { useState } from 'react';
import './Form.scss';

import Dropdown from '../Dropdown/Dropdown.jsx';

const Form = ({ postPrompt, engines }) => {
	const [prompt, setPrompt] = useState('');
	const [toggle, setToggle] = useState(false);

	const handleChange = (e) => {
		const text = e.target.value;
		setPrompt(text);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setToggle(true);
		postPrompt(prompt, toggle);
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<Dropdown engines={engines} />
			<label> Enter prompt: </label>
				<textarea type="text" name="name" value={prompt} rows="5" cols="30" onChange={handleChange}/>
			<div className="submit"> 
					<input type="submit" className="submit-btn" value="Submit"/>
			</div>
		</form>
	)
}

export default Form;