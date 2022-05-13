import React, { useState } from 'react';

const Form = () => {
    const [prompt, setPrompt] = useState('');

    const handleChange = (e) => {
        const text = e.target.value;
        setPrompt(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label> Enter prompt: </label>
                <textarea type="text" name="name" value={prompt} rows="5" cols="30" onChange={handleChange}/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form;