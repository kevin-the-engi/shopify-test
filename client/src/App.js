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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getData();
  })

  const getData = () => {
    axios.get('/app')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const postPrompt = (prompt, toggle) => {
    axios.post('/submit', {prompt})
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      })

    // axios.post(api, request, auth)
    //   .then((res) => {
    //     const { id, choices } = res.data;
    //     const response = choices[0].text;
    //     const promptData = {
    //       id, prompt, response
    //     }
        
    //     if (data.length === 1) {
    //       setData(data => [promptData]);
    //     } else {
    //       setData(data => [promptData, ...data]);
    //     }

    //     setVisible(toggle);
    //   })
    //   .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <h1 className="App-header">
          Fun with AI
      </h1>
      <div className="App-body">
        <Form postPrompt={postPrompt} />
        <Response data={data} visibility={visible} />
      </div>
    </div>
  );
}

export default App;
