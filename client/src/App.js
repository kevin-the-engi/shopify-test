import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

import Form from './components/Form/Form.jsx';
import Response from './components/Response/Response.jsx';

const App = () => {
	const [data, setData] = useState([{
		id: '',
		created: 0,
		prompt: '',
		response: ''
	}]);
	const [engines, setEngines] = useState([]);

	useEffect(() => {
		getData();
		getEngines();
	}, [])

	const getData = () => {
		axios.get('/app')
			.then(res => {
				setData(res.data);
			})
			.catch(err => {
				console.log(err);
			})
	}

	const getEngines = () => {
		axios.get('/engines')
			.then(res => {
				setEngines(res.data);
			})
			.catch(err => {
				console.log(err);
			})
	}

	const postPrompt = (prompt, engine) => {
		axios.post('/submit', { prompt, engine })
			.then(res => {
				setData(res.data);
			})
			.catch(err => {
				console.log(err);
			})
	}

	return (
		<div className="App">
			<h1 className="App-header">
					Fun with AI
			</h1>
			<div className="App-body">
				<Form 
					postPrompt={postPrompt} 
					engines={engines}
				/>
				<Response data={data} />
			</div>
		</div>
	);
}

export default App;
