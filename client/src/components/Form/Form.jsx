import React, { useState } from 'react';
import './Form.scss';

import Dropdown from '../Dropdown/Dropdown.jsx';

const Form = ({ postPrompt, engines }) => {
	const [prompt, setPrompt] = useState('');
	const [engine, setEngine] = useState('');

	const handleChange = (e) => {
		const text = e.target.value;
		setPrompt(text);
	}

	const getDropdown = (id) => {
		setEngine(id);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		postPrompt(prompt, engine);
		setPrompt('');
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<label> Enter prompt: </label>
				<textarea 
					type="text" 
					name="name" 
					className="textbox"
					value={prompt} 
					rows="5" 
					cols="40" 
					onChange={handleChange} 
					placeholder="Write a poem about dinosaurs in the snow"
				/>
			<div className="form-footer"> 
				<div className="container-left">
					<Dropdown engines={engines} getDropdown={getDropdown} />
				</div>
				<div className="container-right">
					<input type="submit" className="submit-btn" value="Submit"/>
				</div>
			</div>
		</form>
	)
}

export default Form;