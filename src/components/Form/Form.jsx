import { useState } from 'react';

const Form = ({ getResponse }) => {
    const [prompt, setPrompt] = useState('');

    const handleChange = (e) => {
        const text = e.target.value;
        setPrompt(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getResponse(prompt)
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