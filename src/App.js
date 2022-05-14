// import { useState } from 'react';
import axios from 'axios';
import './App.css';

import Form from './components/Form/Form.jsx';
import Response from './components/Response/Response.jsx';

const App = () => {
  // const [prompts, addPrompt] = useState([]);
  const testdata = {
    prompt: "test prompt",
    response: "test response"
  }

  const getResponse = (prompt) => {
    const api = 'https://api.openai.com/v1/engines/text-curie-001/completions';
    const options = {
      prompt, 
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }

    axios.post(api, options)
      .then((res) => {
        console.log(res)
      })
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
