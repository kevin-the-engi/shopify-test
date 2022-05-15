import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';

import Form from './components/Form/Form.jsx';
import Response from './components/Response/Response.jsx';

const App = () => {
  const [data, setData] = useState([{
    id: '',
    prompt: '',
    response: ''
  }]);
  const [visible, setVisible] = useState(false);

  const getResponse = (prompt, toggle) => {
    const api = 'https://api.openai.com/v1/engines/text-curie-001/completions'
    const auth = {
      headers: {
        'Authorization': `Bearer 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`
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
        const { id, choices } = res.data;
        const response = choices[0].text;
        const promptData = {
          id, prompt, response
        }
        
        if (data.length === 1) {
          setData(data => [promptData]);
        } else {
          setData(data => [promptData, ...data]);
        }

        setVisible(toggle);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <h1 className="App-header">
          Fun with AI
      </h1>
      <div className="App-body">
        <Form getResponse={getResponse} />
        <Response data={data} visibility={visible} />
      </div>
    </div>
  );
}

export default App;
