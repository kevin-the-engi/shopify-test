// import { useState } from 'react';
import axios from 'axios';
import './App.css';

import Form from './components/Form/Form.jsx';
import Response from './components/Response/Response.jsx';

const App = () => {
  // const [prompts, addPrompt] = useState([]);
  const testdata = []
  testdata[0] = {
    prompt: "test prompt1",
    response: "test response1"
  }
  testdata[1] = {
    prompt: "test prompt2",
    response: "test response2"
  }

  const getResponse = (prompt) => {
    const api = process.env.REACT_APP_API
    const auth = {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    }
    const request = {
      prompt, 
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }

    axios.post(api, request, auth)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <h1 className="App-header">
          Fun with AI
      </h1>
      <Form getResponse={getResponse} />
      <Response data={testdata} />
    </div>
  );
}

export default App;
